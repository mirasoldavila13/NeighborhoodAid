DROP DATABASE IF EXISTS neighborhoodAid;
CREATE DATABASE neighborhoodAid;

\c neighborhoodAid;

-- Enable the PostGIS extension for spatial data support
CREATE EXTENSION IF NOT EXISTS postgis;
