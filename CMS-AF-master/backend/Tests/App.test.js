const request = require('supertest')
const app = require('../server')
test('Adding User information', async () => {
    await request(app).post('/api/user/adduser')
    .send({
        email:"shang@gmail.com",
        name : "kavi",
        phone:"0212220533",
        city : "jaffna",
        state:"nothern province",
        country:"Srilanka",
        qualification:"BSC"
       
    })
    .expect(200);


})

test('Getting User information', async () => {
    await request(app)
    .get('/api/user/getuser/')
    .expect('Content-Type', /json/)
    .expect(200);


})

test('Getting Research Information', async () => {
    await request(app)
    .get('/api/research/getSingleFiles')
    .expect('Content-Type', /json/)
    .expect(200);


})

test('Getting Workshop Information', async () => {
    await request(app)
    .get('/api/workshop/getworkshop')
    .expect('Content-Type', /json/)
    .expect(200);


})
