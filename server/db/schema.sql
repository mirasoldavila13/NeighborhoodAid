DROP DATABASE IF EXISTS neighboorhoodAid;
CREATE DATABASE neighboorhoodAid;

\c neighboorhoodAid;

-- Enable the PostGIS extension for spatial data support
CREATE EXTENSION IF NOT EXISTS postgis;
