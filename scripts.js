var products = [
    {
        "photo": "img/ceasar.jpg",
        "name": "Կեսար",
        "price": 750,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mayraqaghaqayin.jpg",
        "name": "Մայրաքաղաքային",
        "price": 580,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/sunk_khozapukht.jpg",
        "name": "Սունկ խոզապխտով",
        "price": 580,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/corida.jpg",
        "name": "Կորիդա (italiano)",
        "price": 280,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/altono.jpg",
        "name": "Ալտոնո (italiano)",
        "price": 350,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/vegetariakan.jpg",
        "name": "Վեգետարիական",
        "price": 270,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/havi_nuggets.jpg",
        "name": "Հավի նագետ",
        "price": 930,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/tapakats_panir.jpg",
        "name": "Տապակած պանիր",
        "price": 690,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/havi_tevik.jpg",
        "name": "Հավի թևիկներ",
        "price": 850,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/chocolate.jpg",
        "name": "Շոկոլադե կոկտեյլ",
        "price": 600,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/milk_shake.jpg",
        "name": "Կաթնային կոկտեյլ",
        "price": 500,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mokhito.jpg",
        "name": "Մոխիտո",
        "price": 850,
        "active": false,
        "quantity": 1
    }, 
    {
        "photo": "img/mango_juice.jpg",
        "name": "Մանգոյի հյութ (1լ)",
        "price": 1200,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/urcov_tea.png",
        "name": "Ուրցով թեյ",
        "price": 300,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Ջուր (0.5լ)",
        "price": 250,
        "active": false,
        "quantity": 1
    } 
];
 
const sefServiceMachine = {
    data(){
        return {
           products: window.products 
        }
    },
    methods: {
        total: function(){
           var total = 0;

           this.products.forEach(function(item){
               if(item.active)
               {
                   total += item.price * item.quantity;
               }
           });
            return total.toFixed(2);
        }
    }
};

Vue.createApp(sefServiceMachine).mount('#app');