# The data container
This is the data container of the application. It features a mongo database, and a file store.

# The mongodb
The mongodb is used by the bff container, and contains the data displayed by the GUI.
It will be read and written by the bff microservice.

# How to run
`docker-compose up`

# The file store
The file store stores the binary files of the application.
These are 
* ./data/videos - the mp4 files downloaded from the ring
* ./data/images - the faces extracted from the videos
* ./data/classifier - the classifier that is deciding on a new face which person it belongs to

The file store is accessed by all three microservices. In order to link the file store run `ln -s ../ringface-db/data data` from all three microservices. This will create a local `./data` dir in all three checkouts of the microservices.
