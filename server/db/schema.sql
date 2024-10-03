DROP DATABASE IF EXISTS neighborhoodaid;
CREATE DATABASE neighborhoodaid;

\c neighborhoodaid;
-- need this extension for geometry for longitude/latitude
CREATE EXTENSION IF NOT EXISTS postgis;