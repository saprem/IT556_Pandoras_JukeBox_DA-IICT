
import pandas as pd
import numpy as np
import math
from scipy import spatial
from sklearn.metrics.pairwise import cosine_similarity

# importing data from csv into a pandas dataframe 
#df = pd.DataFrame.from_csv('music_full_clean.csv')
df = pd.DataFrame.from_csv('music_ultimate_final.csv')

# find all the genres so that we can create arms
genres = df.genre.unique()

# find all the artists so that we can create subarms
artists = df.artist_name.unique() 

class MultiArmBandit:
		
	# a sort of dictionery that will hold the top 3
	# recently used and liked items of the user
	user_genre_preferences = {}
	
	# map indices to genres
	index_genre_mapping = {}

	# map genre to indices
	genre_index_mapping = {}

	# map indices to artists
	index_artist_mapping = {}

	# map artist to index
	artist_index_mapping = {}

	# map genre to artist_index
	genre_artist_index_mapping = {}

	# list of last 10 ignored songs
	ignored_list = []

	
	# constructor
	def __init__(self, req_epsilon, alpha_a, alpha_g, ignore_list_len):
		# our epsilon thresholds (required epsilon)
		self.req_epsilon = req_epsilon

		# set current epsilon to 1 	
		self.epsilon = 1

		# set alpha for artist
		self.alpha_a = alpha_a

		# set alpha for genre
		self.alpha_g = alpha_g

		# number of time we have recommended
		self.rounds = 0

		# initial exploratory phase
		self.initial_exploratory_phase = True
		
		# initialize arms with zeos
		# LATER change this to set arm values according to user's initial preference
		self.est_arm_value = np.zeros(len(genres))

		# initialize arms with zeos
		# LATER change this to set arm values according to user's initial preference
		self.est_subarm_value = np.zeros(len(artists))

		self.ignore_list_len = ignore_list_len


	# this function find recommendation of songs for the user
	def recommed_songs(self):
		pass		

	# this function will initialize the user preferences 
	# initially it will be assigned randomly
	def initialize_user_genre_preferences(self):
		for genre in genres:
			# filter rows that belong to that genre
			df_genre = df[df.genre == genre] 	

			# find songs that belong to that genre
			#genre_songs = np.array(df_genre.title)
			
			genre_track_id = np.array(df_genre.track_id)

			# randomly choose 
			n_choose = 3
			#selections = np.random.choice(len(genre_songs), n_choose, replace = False)
			selections = np.random.choice(len(genre_track_id), n_choose, replace = False)			


			# initialize the gnere entry with empty list
			self.user_genre_preferences[genre] = []
			
			# fill up the genre preference 
			for i in range((len(selections))):
				#self.user_genre_preferences[genre].append(genre_songs[i])
				self.user_genre_preferences[genre].append(genre_track_id[i])	
			
		
	# this function will create mapping from index to genre arm
	def initialize_arms_indices(self):
		i = 0
		for genre in genres:
			self.index_genre_mapping[i] = genre
			self.genre_index_mapping[genre] = i	
			i = i+1

	# this function will create mapping from index to artist subarm
	def initialize_subarms_indices(self):
		i = 0
		for artist in artists:
			self.index_artist_mapping[i] = artist	
			self.artist_index_mapping[artist] = i
			i = i+1
	

	# this function will create the mapping from genre to artist index
	def initialize_genre_artist_index_map(self):
		df_genre_artist = df[['genre', 'artist_name']]
		genre_artist_list =  np.array(pd.DataFrame.drop_duplicates(df_genre_artist))
		for genre_artist in genre_artist_list:
			genre = genre_artist[0]
			artist = genre_artist[1]
			for key, value in self.index_artist_mapping.iteritems():
				if value == artist:
					if genre in self.genre_artist_index_mapping:
						self.genre_artist_index_mapping[genre].append(key)
					else:	
						self.genre_artist_index_mapping[genre] = [key]
					break
				
		
	def recommend_songs(self):

		# increment rounds 
		self.rounds = self.rounds + 1

		# check if we are in initial exploratory phase 
		# and adjust epsilon accordingly
		if(self.initial_exploratory_phase):

			# calculate epsilon for the current round
			temp_epsilon = 1/math.sqrt(self.rounds + 1)

			# If epsilon falls below the required epsilon then set current epsilon to required epsilon
			# and end the inital exploratory phase
			if(temp_epsilon < self.req_epsilon):
				self.epsilon = self.req_epsilon
				self.initial_exploratory_phase = False
			else:
				self.epsilon = temp_epsilon

		
		print 'current epsilon is ' + str(self.epsilon)

		# check if we want to go greedily of exploratorily
		greedy = False		
		random_num = np.random.random()
		#random_num = 0.9	

		if(random_num > self.epsilon):
			greedy = True
			
		# these would contain the final recommendations for the user
		reco_songs = []
		
		if greedy:
		
			print 'Going greedy'

			# here the agent acts greedily and choose songs from the top 3 arms in the ratio 3:2:1
			
			# getting the top 3 genre indices			
			top_genre_indices = self.est_arm_value.argsort()[-3:][::-1]
			
			print 'arm_values'
			print self.est_arm_value
			
			print 'selected arm indices'
			print top_genre_indices
			
			# gets songs for the first index
			reco_songs.append(self.get_songs_from_genre_index(top_genre_indices[0], 3, 2))
			
			#get songs for the second index
			reco_songs.append(self.get_songs_from_genre_index(top_genre_indices[1], 2, 1))

			#get songs for the third index
			reco_songs.append(self.get_songs_from_genre_index(top_genre_indices[2], 1, 1))
			
		else:
			
			print 'Going exploratory'
			
			# here the agent acts exploratorily and chooses songs from the top 2  arms in the ratio 2:2
			# it also picks up a random arm and chooses 2 songs from it
			top_genre_indices = self.est_arm_value.argsort()[-2:][::-1]

			print 'arm values'
			print self.est_arm_value

			print 'selected arm indices'			
			print top_genre_indices
			
			# gets songs for the first index
			reco_songs.append(self.get_songs_from_genre_index(top_genre_indices[0], 2, 1))
			
			#get songs for the second index
			reco_songs.append(self.get_songs_from_genre_index(top_genre_indices[1], 2, 1))
			
			# select a random arm number for exploration
			random_arm_number = np.random.choice(len(self.est_arm_value), 1)[0]

			#get songs for the random_arm
			reco_songs.append(self.get_songs_from_genre_index(random_arm_number, 2, None))
		
		# flatten the index selections from all n songs in preference list
		flat_reco_songs = [item for sublist in reco_songs for item in sublist]		
		return reco_songs
				
	def get_songs_from_genre_index(self, genre_index, n_songs, n_max_artist_songs):
		
		# list that would contain the final recommended songs for this genre
		genre_reco_songs = []		
		
		# get genre for that index
		genre_name = self.index_genre_mapping[genre_index]

		# get the top artists indices (subarm numbers) for that genre
		artist_list = self.genre_artist_index_mapping[genre_name]	
		subarm_est_values = []
		for i in artist_list:
			subarm_est_values.append(self.est_subarm_value[i])

		# find the top_artist arm index for the given genre		
		top_artist_index = np.array(subarm_est_values).argsort()[-1:][0]
		
		# find the actual index for that arm
		top_artist_arm = artist_list[top_artist_index]

		# getting songs
		if n_max_artist_songs != None:
			genre_reco_songs.append(self.get_songs_from_genre(genre_name, self.index_artist_mapping[top_artist_arm], n_max_artist_songs))
			if n_songs-n_max_artist_songs != 0:
				genre_reco_songs.append(self.get_songs_from_genre(genre_name, None, n_songs-n_max_artist_songs))
		else:
			genre_reco_songs.append(self.get_songs_from_genre(genre_name, None, n_songs))

		# flatten the index selections from all n songs in preference list
		flat_genre_reco_songs = [item for sublist in genre_reco_songs for item in sublist]
		return flat_genre_reco_songs
			
			
	def get_songs_from_genre(self, genre_name, artist_name, n_songs):
		
		#print genre_name, artist_name
		genre_reco_songs = []		
	
		# get the user preferences for that genre (these would be 3 in number)
		user_preferences = self.user_genre_preferences[genre_name]
		
		# filter by genre name and artist(if not none)
		if artist_name != None:
			df_genre = df[(df.genre == genre_name) & (df.artist_name == artist_name)]
		else:
			df_genre = df[df.genre == genre_name]

		df_genre_features = np.array(df_genre[df_genre.columns[4:]])
		
		item_index_selections = []
		
		# iterate for each item in user preferences and try to find similarity with the item/songs in
		# that genre and for that artist(if not none) for which the arm value is maximum
		for item in user_preferences:
			
			#get the features of the item 
			item_features = np.array(df[df.track_id == item])[0][4:]
			
			# create empty similarity measure list and find similarity
			similarity_measure = []
			for df_item in df_genre_features:
				similarity = 1 - spatial.distance.cosine(item_features, df_item)
				similarity_measure.append(similarity) 		
			
			# get top 3 similar items 
			to_choose = min(len(similarity_measure), 5)
			top_similar_items_indices = np.array(similarity_measure).argsort()[-to_choose:][::-1]
			item_index_selections.append(top_similar_items_indices)
		
		# flatten the index selections from all n songs in preference list
		flat_item_index_selections = [item for sublist in item_index_selections for item in sublist]
		
		# select random m songs from this flattened index list			
		selections = np.random.choice(len(flat_item_index_selections), n_songs, replace = False)		
		
		num_added_songs = 0

		added_songs_track_list = []
		
		while num_added_songs != n_songs:
		
			# add items to final selections list
			for i in selections:
				song = np.array(df_genre)[flat_item_index_selections[i]]
				song_track_id = song[1]
				if song_track_id in self.ignored_list:
					print str(song_track_id) + 'was on ignored list.. so skipping it..'
				elif song_track_id in added_songs_track_list:
					print 'song already added to recommendations'
				else:
					genre_reco_songs.append(song)
					added_songs_track_list.append(song_track_id)
					num_added_songs = num_added_songs + 1

			if num_added_songs == n_songs:
				break
			else:
				selections = np.random.choice(len(flat_item_index_selections), n_songs-num_added_songs, replace = False)

		# return songs for this genre 
		return genre_reco_songs
	
	# this function calculates the reward for the songs	
	def calculate_reward(self, songs_action_list):
		
		genre_cummulative_reward = {}
		user_response_list = []			

		for song_action in songs_action_list:
			song_title = song_action[0][0]
			song_artist = song_action[0][1]
			song_genre = song_action[0][2]
			song_track_id = song_action[0][3]
			action = song_action[1]
			if action == 'P':
				reward = 0.5
			elif action == 'PS':
				reward = 0
			elif action == 'PL':
				reward = 1
			elif action == 'PD':
				reward = -1
			elif action == 'S':
				reward = 0.25
			elif action == 'SL':
				reward = 0.75
			elif action == 'SD':
				reward = -1
			else:
				reward = 0
			
			# if song was ignored then add it to the ignored list
			if action == 'I':
				if len(self.ignored_list) == self.ignore_list_len:
					self.ignored_list.pop()
				self.ignored_list.append(song_track_id)
			
			user_response_list.append((song_title, song_artist, song_genre, reward))
			self.update_subarm_value(song_artist, reward)
			
			if song_genre in genre_cummulative_reward:
				genre_cummulative_reward[song_genre] = genre_cummulative_reward[song_genre] + reward
			else:
				genre_cummulative_reward[song_genre] = reward
		#print genre_cummulative_reward
		self.update_arm_values(genre_cummulative_reward) 
				
		self.update_preference_list(user_response_list)
		
		print 'Current ignored list contains following song track ids'
		print self.ignored_list

	
	# this function updates the subarm values
	def update_subarm_value(self, artist, reward):
		print '------------------UPDATING ARTIST REWARDS------------------'
		print 'artist name is ' + artist	
		artist_arm_index = self.artist_index_mapping[artist]
		print 'prev value was ' + str(self.est_subarm_value[artist_arm_index])
		self.est_subarm_value[artist_arm_index] = self.alpha_a * self.est_subarm_value[artist_arm_index] + (1-self.alpha_a)* reward
		print 'current value is ' + str(self.est_subarm_value[artist_arm_index])		
	
	# this function updates the genre arm values
	def update_arm_values(self, arm_reward_dict):
		print '------------------UPDATING GENRE REWARDS------------------'
		print arm_reward_dict
		for genre, reward in arm_reward_dict.iteritems():
			reward = reward/3.0
			print genre + ' got reward ' + str(reward)
			genre_arm_index = self.genre_index_mapping[genre]
			print 'prev value was ' + str(self.est_arm_value[genre_arm_index])
 			self.est_arm_value[genre_arm_index] = self.alpha_g * self.est_arm_value[genre_arm_index] + (1-self.alpha_g) * reward 
			print 'new value is ' + str(self.est_arm_value[genre_arm_index])
		

	# this function updates the preference list of the user
	def update_preference_list(self, user_response_list):
		print '------------------UPDATING USER PREFERENCES------------------'
		for response in user_response_list:
			title = response[0]
			artist = response[1]
			genre = response[2]
			reward = response[3]
			if reward >= 0.5:
				print 'popped track id ' + str(self.user_genre_preferences[genre].pop())
				song_track_id = np.array(df[(df.title == title) & (df.artist_name == artist) & (df.genre == genre)])[0][1]
				print 'added track id' + str(song_track_id) + ' for song '+ str(title)				
				self.user_genre_preferences[genre].append(song_track_id)
				
	

	def update_initial_user_genre_prefs(self, user_genre_prefs):
		user_prefs = user_genre_prefs.split(',')
		for pref in user_prefs:
			index = int(pref)	
			self.est_arm_value[index] = 0.5

		


if __name__ == '__main__':
	# basic initialization 
	mab = MultiArmBandit(0.3, 0.6, 0.8, 10)
	mab.initialize_user_genre_preferences()	
	mab.initialize_arms_indices()
	mab.initialize_subarms_indices()
	mab.initialize_genre_artist_index_map()
		

	print mab.index_genre_mapping


	# getting initial input from user
	print 'Welcome to Pandora JukeBox Music Center'
	print 'Please enter your initial preferences of genre (in the form 1,2,...)'
	for i in range(len(genres)):
		print str(i) + '-' + genres[i]
	user_genre_prefs = raw_input('Enter here ')
	mab.update_initial_user_genre_prefs(user_genre_prefs)
		
		
	while(True):
		# recommendation
		reco_songs = mab.recommend_songs()
	
		#print reco_songs	

		reco_songs_list = []
		#print reco_songs
		for genre in reco_songs:
			for song in genre:
				genre = song[0]
				song_track_id = song[1]
				artist_name = song[2]
				song_title = song[3]
				reco_songs_list.append((song_title, artist_name, genre, song_track_id)) 
	
		print 'recommended items:'
		for item in reco_songs_list:
			print item

		action_seq = []
		for i in range(len(reco_songs_list)):
			action = raw_input('what did you do with ' + reco_songs_list[i][0] + ' (P/PS/PL/PD/S/SL/SD/I)?')
			action_seq.append(action)
	
		#print action_seq
	
		song_action_seq = []
		for i in range(len(reco_songs_list)):
			song_action_seq.append((reco_songs_list[i], action_seq[i]))

		#print song_action_seq
		mab.calculate_reward(song_action_seq)

		choice = raw_input('DO YOU WISH TO CONTINUE (y/n)?')
		if(choice == 'y' or choice == 'Y'):
			continue
		else:
			break






