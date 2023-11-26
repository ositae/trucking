const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const db = require('../models');

describe('Holder Controller', function() {
    describe('GET /holder/truckBrand', function() {
      it('should return a 200 response', function(done) {
        request(app).get('/holder').expect(200, done);
      });
    });
    it('should update the truck brand', function(done) {
        request(app).put('/holder/truckBrand')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          truckBrand: 'Mack'
        })
        .expect('Location', '/holder/truckBrand')
        .expect(302, done);
      });
    });
  