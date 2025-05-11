//
//https://automationexercise.com/api/productsList

describe('api request', () => {
    it('api get all product', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            console.log("Full Response:", response);
            console.log("Product list:", response.body);
            expect(response.status).to.eq(200);
        })
    })

    it('POST To All Products List', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            failOnStatusCode: false,
            body: {
                id: 100,
                name: "renish"
            }
        }).then((resp) => {
            const body = typeof resp.body === 'string' ? JSON.parse(resp.body) : resp.body;
            console.log('Status:', resp.status);
            console.log('Body:', resp.body);
            expect(resp.status).to.eq(200); // The HTTP status is 200 (quirk of API)
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq('This request method is not supported.');
        })
    })

      it('api get all Brands List', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/brandsList'
        }).then((response) => {
            console.log("Full Response:", response);
            console.log("Product list:", response.body);
            expect(response.status).to.eq(200);
        })
    })


    it('Put To All Brands List',()=>{
        cy.request({
            method:'PUT',
            url:'https://automationexercise.com/api/brandsList',
            body:{
                id:21,
                name:'sdfsdfsd'
            }
        }).then((response)=>{

             const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
            console.log('Status:', response.status);
            console.log('Body:', response.body);
            expect(response.status).to.eq(200); 
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq('This request method is not supported.');
        })
    })


})

