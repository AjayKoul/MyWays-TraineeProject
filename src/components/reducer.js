export const initialState =[{
    
        _id:{
            $oid: null,
        },
        ProductId: null,
        Name: null,
        SkuNumber: null,
        Category: {
            primary: null,
            secondary: null,
        },
        URL:{
            product: null,
            productImage: null,
        },
        Description:{
            short: null,
            long: null,
        },
        Discount:{
            currency: null,
            type: null,
        },
        Price:{
            currency: null,
            retail: null,
        },
        Shipping:{
            availability: null,
        },
        Keywords: null,
        M1: null,
        Pixel: null,
        Params:{
            avg_rating: null,
            lang: null,
            num_reviews: null,
        },
        Brand: null,
        AttributeClass:{
            class_id: null,
            Misc: null,
            Category: null,
        },
        Provider: null,
    
}]

export const reducer = (state,action)=>{
    console.log(action.data)
    switch(action.type){
        case 'SET_DATA':
            return [...action.data]
        case 'SORT_DATA':
            return [...action.data]
        default:
            return state;
    }
}
