## Music Recommendation System 
Pandora's Jukebox is a personalized music recommendation system based on multi armed bandits with a flavour of content based recommendation. 

* The recommendations are based on the user’s choice of genre and artist. These two are the arms (genre) and subarm (artist) that the user pulls. 
* It is capable of finding songs based on user's past history and preferences. For each genre  a list of three songs is maintained that the user played or played and liked recently and based on this similar songs are recommended.
* It helps to explore different music. It is based on a modified epsilon greedy policy which takes the serendipity factor into consideration. 
* The cold start problem is taken care of by asking the user of his preferences of genre during sign up. 
* It also takes into account the current mood of the user by updating the arms values accordingly. 

## How to start the engine? 
* Download this repository
* ``` cd PandorasJukeBox ```
* ``` python reco.py ```
### How to start the application? ###

* Download this repository.
* ``` cd Console ```
* ``` python recoConsole.py ```
* Copy the server url and paste it into the browser


## Authors

* **Saprem Shah** - *201401107* 
* **Saloni Mundra** - *201501016* 
* **Shubham Annadate** - *201501020* 
* **Kruti Sheth** - *201501180*
* **Aashka Kapadia** - *201501187*

## Acknowledgments

* Prof Sourish Dasgupta- For his guidance
