describe('template spec', () => {
  let token;
  let answer;
  it('get token', () => {
    cy.request('POST', 'https://optionalzero.duckdns.org:2996/api/token', { username: '___',
    password: '___',
    guest: false,
    remember_me: true }).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.status).to.eq(200)
        token = response.body['access_token']
      }
    )
    
    cy.wait(2000)
  })
  it('get categories', () => {
    cy.request({
      method: 'GET',
      form: false,
      url: 'https://optionalzero.duckdns.org:2996/api/categories',
      headers: {
        'Authorization': 'Bearer '+token    
      }}).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.status).to.eq(200)
        answer = JSON.stringify(response.body);
      }
    )
  })
  it('print answer', () => {
    cy.log('answer = ' + answer)
  })
})
