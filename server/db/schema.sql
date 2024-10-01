DROP DATABASE IF EXISTS change_this_db;
CREATE DATABASE change_this_db;

\c change_this_db;
-- need this extension for geometry for longitude/latitude
CREATE EXTENSION IF NOT EXISTS postgis;