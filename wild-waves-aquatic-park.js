const WAVE_POOL_MIN_HEIGHT = 42; // in inches
        const WATERSLIDE_MIN_HEIGHT = 48; // in inches
        const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

        function buyTicket() {
            let attractionType;
            while (true) {
                attractionType = prompt('Which attraction do you want to visit? Please type "wave" for wave pool, "water" for waterslide, or "river" for lazy river: ');
                if (["wave", "water", "river"].includes(attractionType)) {
                    break;
                } else {
                    alert("Invalid attraction choice. Please select from the available options: 'wave', 'water', or 'river'.");
                }
            }

            let userHeight;
            while (true) {
                const heightInput = prompt('What is your height in inches? Please enter a number: ');
                userHeight = parseInt(heightInput);
                if (!isNaN(userHeight)) { // Check if the input is a valid number
                    break;
                } else {
                    alert("Invalid height. Please enter a valid number of inches.");
                }
            }

            const isAllowed = checkHeight(attractionType, userHeight);
            if (isAllowed) {
                alert('Congrats, you may ride the selected attraction!');
            } else {
                alert('Sorry, you may not ride the selected attraction.');
            }
        }

        function checkHeight(attraction, height) {
            switch (attraction) {
                case "wave":
                    return height >= WAVE_POOL_MIN_HEIGHT;
                case "water":
                    return height >= WATERSLIDE_MIN_HEIGHT;
                case "river":
                    return height >= LAZY_RIVER_MIN_HEIGHT;
                default:
                    return false;
            }
        }