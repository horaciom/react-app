module.exports = () => {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const data = {
        user: {
            "name": "Horacio Moreno",
            "dob": "14/05/1990",
            "cash": rand(1000, 1500)
        },
        items: []
    }


    // Create 1000 users

    for (let i = 0; i < 53; i++) {

        data.items.push({
            "id": i,
            "title": "Some title",
            "category": "Some Category",
            "price": rand(100, 2000),
            "image": `http://localhost:3004/images/${rand(1,8)}.png`
        });
    }
    return data;
}