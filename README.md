### Installatiehandleiding

1. Clone het project.
2. Open het project in een editor, pas code aan in './dev'.
3. Compileer met een typescript compiler.
4. Open index.html in './docs' om het resultaat te zien.

### Game

[Klik om het spel te spelen!](https://joeyhoogerwerf.github.io/100-SECONDS/docs/)

### Klassendiagram

![alt text](http://i.imgur.com/nz7xf6a.png)

### OOP principes

#### Classes en instances

Mijn game heb ik op een objectgeoriënteerde manier ontwikkeld. Zo heb ik bijvoorbeeld een class geschreven 'EnemySpawnManager' die Enemies spawnt. Hier wordt ongeveer elke 60 frames een nieuwe Enemy geïnstantieerd uit de class 'Enemy'. Deze instances sla ik vervolgens op in een array. In de gameloop loop ik door deze array om de enemies te updaten en te renderen.

#### Encapsulation

In mijn classes gebruik ik private access modifiers voor de properties om de werking van een class af te schermen voor de buitenwereld. Op deze manier kunnen er geen onverwachte bugs optreden doordat een class 'per ongeluk' een waarde toekent aan een instance. Als ik toch wil dat men gebruik kan maken van de properties dan heb ik hiervoor getters en setters gebruikt. Deze publieke methods zorgen er enkel voor dat de waarde van een property kan worden opgehaald (get) of kan worden veranderd (set).

#### Composition

Sommige classes in mijn game zijn opgebouwd uit meerdere instanties van andere classes, dit noemt met composition. Zo gebruikt de grootste class 'GameScreen' bijvoorbeeld meerdere andere classes. Dit is logisch omdat in GameScreen het spel wordt gespeeld en de meeste actie plaatsvindt. Zo heeft GameScreen bijvoorbeeld een 'Player', meerdere 'Enemies', een 'CollisionListener' en een 'InputManager'.

#### Inheritance

Omdat in mijn game een aantal classes veel dezelfde functionaliteit hebben gebruik ik hiervoor inheritance. Op deze manier breng ik de gemeenschappelijk code onder in een superclass waar de subclasses uit erven. Op deze manier hoef ik maar één de code te schrijven en blijft mijn code schoner en efficiënter. Een voorbeeld is de class 'Box2DObject', hierin is alle functionaliteit geïmplementeerd om box2D bodies te genereren. Aangezien de classes 'Player', 'Enemy' en 'Block' allemaal box2D bodies zijn erven deze uit de class Box2DObject.

### Future Improvements

* Put enemies in an objectpool for better performance.
* Create restart game functionallity instead of hard refresh.