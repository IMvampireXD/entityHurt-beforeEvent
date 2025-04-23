# entityHurt-beforeEvent

mojang still havent added entityHurtBeforeEvent bedrock Script API, yet.
so we can't cancel entity damages.
But my friend @Cennac found a workaround, applying instant health max, gives them invincibility,
so we came up on the idea on, Why not just make make it a custom event?
so that we can make it extend after event to add  `event.cancel` property to apply efect and cancel damage.
And we've implemented it!
This is a custom event, that adds a prototype in the WorldBeforeEvents class.
This will add alot of possibilities in making addons with Script API.  

# @minecraft/server version:
- currently supports 2.0.0-beta

# Authors:
- IMvampireXD (discord- @finnafinest_)
- CennacEh (discord- @cennac2)
