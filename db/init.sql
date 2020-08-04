CREATE TABLE spaceData (
  id varchar(255) NOT NULL,
  full_name varchar(255) NOT NULL,
  stat varchar (255) NOT NULL,
  location_name varchar(255),
  location_region varchar(255),
  location_longitude decimal(15),
  location_latitude decimal(15),
  PRIMARY KEY (id)
);
