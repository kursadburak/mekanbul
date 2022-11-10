var mongoose=require("mongoose");
//var dbURI="mongodb://localhost/mekanbul";
var dbURI="mongodb+srv://kursad:12345k@mekanbul.moolscv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI);

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
})


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağandı.");
})


mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu.");
})


mongoose.connection.on("connected",function(){
    console.log("Bağlantı hatası.");
})


require("./mekansema")