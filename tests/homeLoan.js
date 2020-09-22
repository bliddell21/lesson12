var homeLoan = {}
var completeHomeLoan = (object, data) => {
    object
        .click('@start')
        .click('@loanType')
        .click('@propertyType')
        .click('@next')
        .setValue('@cityInput', data.city)
        .click('@next')
        .click('@loanPurpose')
        .click('@yes')
        .click('@yes')
        .setValue('@price', data.price)
        .setValue('@downPayment', data.down)
        .click('@next')
        .click('@credit')
        .click('@creditHistory')
            .setValue('@address1', data.address1)
            .setValue('@cityState', data.cityState)
            .click('@next')
            .setValue('@firstName', data.firstName)
            .setValue('@lastName', data.lastName)
            .setValue('@email', data.email)
            .click('@next')
            .click('@startAgain')
        

}

var completeLoan = [
    { city: 'Miami', price: '100000', down: '1000', address1: '1234 Main', cityState: 'Miami FL 13245', firstName: 'Charles', lastName: 'Simpson', email: 'test@test123.com' },

    { city: 'Orlando', price: '150000', down: '100', address1: '123 Main', cityState: 'Orlando FL 12345', firstName: "Mike", lastName: "Tyler", email: 'mty@test.com' },
    { city: 'Daytona', price: '500000', down: '6000', addrss1: '345 Main', cityState: 'Daytona FL,12343', firstName: 'Kareem', lastName: 'George', email: 'Kago@test.com' }
]





module.exports = {
    beforeEach: browser => {
        homeLoan = browser.page.homeLoanPage()
        homeLoan
            .navigate()
    },
    after: browser => {
        homeLoan.end()
    },
    'Complete Loan Test': browser => {
        completeLoan.forEach(test => {
            completeHomeLoan(homeLoan, test)
        })
        } 
}