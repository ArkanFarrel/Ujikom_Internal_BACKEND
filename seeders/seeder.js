import User from "../model/userModel.js";
import Property from "../model/propertyModel.js";
import Transaction from "../model/transaksiModel.js";
import Ulasan from "../model/ulasanModel.js";
import Admin from "../model/adminModel.js";

const createSeeder = async () => {
    const user = await User.create({
        name: "Farrel Doe",
        email: "Farrel.doe@gmail.com",
        phone: "0832723273879123",
        role: "penjual",
    });
    const user1 = await User.create({
        name: "Farrel Doe",
        email: "Farrel.doe@gmail.com",
        phone: "0832723273879123",
        role: "pembeli",
    });

    const property = await Property.create({
        name: "Rumah Minimalis A",
        price: 50000000,
        location: "Jakarta Selatan",
        size: 120,
        status: "available",
        description: "Rumah minimalis dengan 2 kamar tidur dan 1 kamar mandi.",
        UserId: user.dataValues.id,
    })
    const property1 = await Property.create({
        name: "Rumah Minimalis B",
        price: 90000000,
        location: "Jakarta Timur",
        size: 180,
        status: "sold",
        description: "Rumah Sudah Terjual",
        UserId: user.dataValues.id,
    });

    const findPropertyByUser = await Property.findAll({
        where: {
            UserId: user.dataValues.id,
        },
        attributes: ["name", "price", "location", "size", "status", "description", "UserId"],
    });

    const transaction = await Transaction.create({
        PropertyId: property.dataValues.id, 
        UserId: user1.dataValues.id,          
        TransactionDate: new Date(),         
        Status: 'Sukses',                    
        Agent: 'John Doe',                   
    });

    // const ulasan = await Ulasan.create({
    //     Rating: rating.dataValues.id
    // });

    const admin = await Admin.create({
        name: "admin farrel",
        email: "Farrel.doe@gmail.com",
        phone: "0832723273879123",
        role: "admin",
    })
    return { user , findPropertyByUser, transaction, admin };

};
const { user, findPropertyByUser: users, transaction, admin } = await createSeeder();

console.log("==== INI ADALAH DATA USER ====");
console.log(user);
console.log("==== INI ADALAH DATA PROPERTY ====");
// console.log(property);
users.map((item) => {
    console.log(item.dataValues);
  });

  console.log("==== INI ADALAH DATA TRANSACTION ====");
console.log(transaction.dataValues);

//   console.log("==== INI ADALAH DATA ulasan ====");
// console.log(ulasan.dataValues);


  console.log("==== INI ADALAH DATA ADMIN ====");
console.log(admin.dataValues);