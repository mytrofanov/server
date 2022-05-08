const ApiError = require('../error/ApiError')
const products =  [
    {
        "name": "orange Juice",
        "category": "Drinks",
        "price": 14.99
    },
    {
        "name": "Apples",
        "category": "fruits",
        "price": 4.99
    },
    {
        "name": "Tomatos",
        "category": "vegetables",
        "price": 6.39
    },
    {
        "name": "Coffee",
        "category": "Drinks",
        "price": 3.15
    },
    {
        "name": "Sweet Paper",
        "category": "Vegetables",
        "price": 12.15
    },
    {
        "name": "Grapes",
        "category": "FRUITS",
        "price": 20.49
    },
    {
        "name": "Pears",
        "category": "Fruits",
        "price": 1.35
    },
    {
        "name": "Team",
        "category": "Drinks",
        "price": 0.4
    }
]
// example of bodyrequest
// {
//     "category":"food",
//     "foodName":"juice",
//     "price":"10",
//     "name":"Max",
//     "phone":"+337788991122"
// }


class DeviceController {
    async create(req, res, next) {
        try {
            let {category, foodName, price, name, phone} = req.body
            let response = 'We got this: ' + category + ', ' + foodName + ', ' + price + ', ' + name + ', ' + phone
            return res.json(response)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        return res.json(products)
    }
}

module.exports = new DeviceController()
