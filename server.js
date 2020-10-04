'use strict'

require('dotenv').config();
require('ejs');

const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');