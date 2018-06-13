
**This is simulation of Great filter in Fermi Paradox.**

Artificial creatures are trying to learn how to move from left side of the screen to right. They start with an artifical brain made of simple 3 layer neural network and random weights. The walls represent a filter to screen out creatures which master jumping over walls with increasing height. 

![screenshot](https://github.com/sarkarsaurabh/fermi_paradox_sim/blob/master/screenshots/Screen%20Shot%202018-06-13%20at%204.52.42%20PM.png)


Live Demo: https://sarkarsaurabh.github.io/fermi_paradox_sim/

**Project Structure**

Environments : Various Environment Models
Creatures : Various Creature Models
NeuroEvolution : Neural Network and Genetic Algorithm library
Lib : p5.js, Matter.js and Tensorflow.js


**Neural Network**

The creatures have a simple neural network of 5-20-5

with 5 inputs:

Horizontal velocity
Vertical Velocity
Torque
Height above the ground level
Distance from the nearest obstracle infront of it

5 outputs:
muscles length controlling 5 muscle groups

**Genetic Algorithm**
1. Score: Distance from the left of the screen.
2. Selection: the likelyhood of seletion of creature to be selected for breeding is based of the score from each run.
3. Crossover: generate a new child by combining the genes of two parents. The portion of parent gene / neural weights to be keep is child is porpotional to each parent score.
4. Random mutations to create new neural weights.



![screenshot](https://github.com/sarkarsaurabh/fermi_paradox_sim/blob/master/screenshots/Jun-13-2018%2017-03-12.gif)

![screenshot](https://github.com/sarkarsaurabh/fermi_paradox_sim/blob/master/screenshots/Jun-13-2018%2017-30-04.gif)




Large parts of the project are inspired by an interesting project
https://github.com/adityathebe/evolutionSimulator
