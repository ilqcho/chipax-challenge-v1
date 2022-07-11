const chai = require("chai");
const chaiHTTP = require("chai-http");
const expect = require('chai').expect
const server = require('../app.js')

chai.use(chaiHTTP);

before(function () {
    console.log('Initializing test');
});
after(function (done) {
    server.close();
    done();
});
describe('Test server', () => {
    it('data should have status 200', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    }); 
    it('data should be a JSON object', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res).to.be.json;
            done();
        });
    }); 
    it('data should have 2 objects', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res.body.data).to.have.length(2);
            done();
        });
    });
    it('data should have property results', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res.body.data[0] && res.body.data[1]).to.have.property('results');
            done();
        });
    });   
    it('property results should be an array', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res.body.data[0].results && res.body.data[1].results).to.be.an('array');
            done();
        });
    });
    it('property seconds should be a string', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res.body.data[0].seconds && res.body.data[1].seconds).to.be.a('string');
            done();
        });
    });
    it('property in_time should be a boolean', (done) => {
        chai.request(server).get('/').end((err, res) => {
            expect(res.body.data[0].in_time && res.body.data[1].in_time).to.be.a('boolean');
            done();
        });
    });     
});





    

    
