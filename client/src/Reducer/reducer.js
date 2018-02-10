const initalState = {
    username: "",
    password: "",
    desiredRent: "",
    filter: 0,
    propertyName: "",
    propertyDescription: "",
    address: "",
    city: "",
    ST: "",
    zip: "",
    imageURL: "",
    loanAmount: "",
    monthlyMortgage: ""
}

const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const RESET_FILTER = "RESET_FILTER";
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_PROPERTY_DESCRIPTION = "UPDATE_PROPERTY_DESCRIPTION";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";

function reducer(state = initalState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.payload});

        case UPDATE_PASSWORD:
            return Object.assign({}, state, {password: action.payload});

        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, {desiredRent: action.payload});

        case RESET_FILTER:
            return Object.assign({}, state, {filter: action.payload});

        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, {propertyName: action.payload});

        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state, {propertyDescription: action.payload});

        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});

        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});

        case UPDATE_STATE:
            return Object.assign({}, state, {ST: action.payload});

        case UPDATE_ZIP:
            return Object.assign({}, state, {zip: action.payload});

        case UPDATE_IMAGE_URL:
            return Object.assign({}, state, {imageURL: action.payload});

        case UPDATE_LOAN_AMOUNT:
            return Object.assign({}, state, {loanAmount: action.payload});

        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, {monthlyMortgage: action.payload});

        default: return state;
    }
}

export function updateUsername (username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updatePassword (password) {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function updateDesiredRent (desiredRent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function resetFilter () {
    return {
        type: RESET_FILTER,
        payload: 0
    }
}

export function updatePropertyName (propertyName) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}

export function updatePropertyDescription (propertyDescription) {
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}

export function updateAddress (address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity (city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState (ST) {
    return {
        type: UPDATE_STATE,
        payload: ST
    }
}

export function updateZip (zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImageURL (imageURL) {
    return {
        type: UPDATE_IMAGE_URL,
        payload: imageURL
    }
}

export function updateLoanAmount (loanAmount) {
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}

export function updateMonthlyMortgage (monthlyMortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export default reducer;