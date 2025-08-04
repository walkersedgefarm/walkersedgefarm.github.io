<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walker's Edge Farm | Family Farm Since 2024</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .hero {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
            background-size: cover;
            background-position: center;
        }
        .animal-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .product-card {
            transition: all 0.3s ease;
        }
        .product-card:hover {
            transform: scale(1.03);
        }
        .order-form {
            background-color: rgba(255, 255, 255, 0.9);
        }
    </style>
</head>
<body class="font-sans bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-tractor text-2xl"></i>
                <span class="text-xl font-bold">Walker's Edge Farm</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#home" class="hover:text-yellow-300 transition">Home</a>
                <a href="#products" class="hover:text-yellow-300 transition">Products</a>
                <a href="#animals" class="hover:text-yellow-300 transition">Our Animals</a>
                <a href="#order" class="hover:text-yellow-300 transition">Order Eggs</a>
                <a href="#about" class="hover:text-yellow-300 transition">About Us</a>
            </div>
            <div class="md:hidden">
                <button id="menu-btn" class="text-2xl focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-green-700 px-4 py-2">
            <a href="#home" class="block py-2 hover:text-yellow-300 transition">Home</a>
            <a href="#products" class="block py-2 hover:text-yellow-300 transition">Products</a>
            <a href="#animals" class="block py-2 hover:text-yellow-300 transition">Our Animals</a>
            <a href="#order" class="block py-2 hover:text-yellow-300 transition">Order Eggs</a>
            <a href="#about" class="block py-2 hover:text-yellow-300 transition">About Us</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero h-screen flex items-center justify-center text-center text-white">
        <div class="px-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Walker's Edge Farm</h1>
            <p class="text-xl md:text-2xl mb-8">Family farm providing fresh, sustainable products since 2024</p>
            <div class="flex justify-center space-x-4">
                <a href="#products" class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition">Our Products</a>
                <a href="#order" class="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-6 py-3 rounded-lg font-semibold transition">Order Eggs</a>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Our Farm Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Egg Products -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Farm fresh eggs" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Farm Fresh Eggs</h3>
                        <p class="text-gray-600 mb-4">Our free-range chickens and ducks produce the most flavorful eggs you'll ever taste. Available in various sizes and colors.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">$5 - $8 per dozen</span>
                            <a href="#order" class="text-green-600 hover:text-green-800 font-semibold">Order Now</a>
                        </div>
                    </div>
                </div>
                
                <!-- Highland Cattle -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1633944099792-7a1d5d8a8c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Highland cattle" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Highland Cattle</h3>
                        <p class="text-gray-600 mb-4">Our Scottish Highland cattle are raised with care on open pastures. Available as breeding stock or for meat.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">Breeding stock available</span>
                            <a href="#contact" class="text-green-600 hover:text-green-800 font-semibold">Inquire</a>
                        </div>
                    </div>
                </div>
                
                <!-- Myotonic Goats -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Myotonic goats" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Myotonic Goats</h3>
                        <p class="text-gray-600 mb-4">Also known as "fainting goats," our myotonic goats are excellent for brush control and make great pets or livestock.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">Kids available seasonally</span>
                            <a href="#contact" class="text-green-600 hover:text-green-800 font-semibold">Inquire</a>
                        </div>
                    </div>
                </div>
                
                <!-- Vegetables -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Fresh vegetables" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Seasonal Vegetables</h3>
                        <p class="text-gray-600 mb-4">Grown without synthetic pesticides, our vegetables are packed with flavor and nutrition. Availability varies by season.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">Market prices</span>
                            <a href="#contact" class="text-green-600 hover:text-green-800 font-semibold">What's in season?</a>
                        </div>
                    </div>
                </div>
                
                <!-- Pumpkins -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1509664158689-2c86d0a07979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Pumpkins" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Pumpkins</h3>
                        <p class="text-gray-600 mb-4">Available in fall, we grow a variety of pumpkins perfect for carving, baking, or decorating.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">Seasonal availability</span>
                            <a href="#contact" class="text-green-600 hover:text-green-800 font-semibold">Learn more</a>
                        </div>
                    </div>
                </div>
                
                <!-- Farm Tours -->
                <div class="product-card bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Farm tour" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Farm Experiences</h3>
                        <p class="text-gray-600 mb-4">Schedule a tour to meet our animals, learn about sustainable farming, and enjoy the countryside.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-800">$15 per person</span>
                            <a href="#contact" class="text-green-600 hover:text-green-800 font-semibold">Book a tour</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Animals Section -->
    <section id="animals" class="py-16 bg-green-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Meet Our Animals</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Chickens -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1596703264279-5be29518770f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Chickens" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Egg-Laying Chickens</h3>
                        <p class="text-gray-600 mb-4">Our diverse flock includes Rhode Island Reds, Barred Rocks, and Ameraucanas, all free to roam and forage naturally.</p>
                        <div class="flex items-center text-yellow-500">
                            <i class="fas fa-egg mr-1"></i>
                            <span class="text-gray-700 ml-1">Producing 20+ dozen eggs weekly</span>
                        </div>
                    </div>
                </div>
                
                <!-- Ducks -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1551524839-462dd408c54d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Ducks" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Ducks</h3>
                        <p class="text-gray-600 mb-4">Our Khaki Campbell and Pekin ducks provide rich, flavorful eggs and help control pests in our ponds.</p>
                        <div class="flex items-center text-yellow-500">
                            <i class="fas fa-egg mr-1"></i>
                            <span class="text-gray-700 ml-1">Duck eggs available weekly</span>
                        </div>
                    </div>
                </div>
                
                <!-- Highland Cattle -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1633944099792-7a1d5d8a8c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Highland cattle" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Highland Cattle</h3>
                        <p class="text-gray-600 mb-4">These shaggy, gentle giants are perfectly adapted to our climate and help maintain our pastures naturally.</p>
                        <div class="flex items-center text-green-600">
                            <i class="fas fa-paw mr-1"></i>
                            <span class="text-gray-700 ml-1">Breeding program established</span>
                        </div>
                    </div>
                </div>
                
                <!-- Myotonic Goats -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Myotonic goats" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Myotonic Goats</h3>
                        <p class="text-gray-600 mb-4">Our "fainting goats" are a constant source of entertainment while helping us maintain brush control.</p>
                        <div class="flex items-center text-green-600">
                            <i class="fas fa-paw mr-1"></i>
                            <span class="text-gray-700 ml-1">New kids born each spring</span>
                        </div>
                    </div>
                </div>
                
                <!-- Farm Dogs -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Farm dogs" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-green-700">Farm Guardians</h3>
                        <p class="text-gray-600 mb-4">Our livestock guardian dogs work tirelessly to protect all the animals from predators.</p>
                        <div class="flex items-center text-green-600">
                            <i class="fas fa-dog mr-1"></i>
                            <span class="text-gray-700 ml-1">Always on duty</span>
                        </div>
                    </div>
                </div>
                
                <!-- Instagram Feed -->
                <div class="animal-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                    <div class="h-64 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                        <div class="text-center p-4">
                            <i class="fab fa-instagram text-4xl mb-2"></i>
                            <h3 class="text-xl font-semibold mb-2">Follow Our Daily Farm Life</h3>
                            <p class="mb-4">See more of our animals and farm activities on Instagram</p>
                            <a href="https://www.instagram.com/walkersedgefarm" target="_blank" class="bg-white text-pink-500 px-4 py-2 rounded-lg font-semibold inline-block">@walkersedgefarm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Egg Order Section -->
    <section id="order" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Order Fresh Eggs</h2>
            <div class="flex flex-col lg:flex-row gap-8">
                <div class="lg:w-1/2 order-form p-8 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-semibold mb-6 text-green-700">Place Your Order</h3>
                    <form id="egg-order-form" class="space-y-4">
                        <div>
                            <label for="name" class="block text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="name" name="name" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label for="email" class="block text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label for="phone" class="block text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label for="egg-type" class="block text-gray-700 mb-1">Egg Type</label>
                            <select id="egg-type" name="egg-type" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option value="chicken">Chicken Eggs (Dozen) - $5</option>
                                <option value="duck">Duck Eggs (Half Dozen) - $6</option>
                                <option value="mixed">Mixed Dozen (Chicken & Duck) - $8</option>
                            </select>
                        </div>
                        <div>
                            <label for="quantity" class="block text-gray-700 mb-1">Quantity</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label for="pickup-date" class="block text-gray-700 mb-1">Preferred Pickup Date</label>
                            <input type="date" id="pickup-date" name="pickup-date" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label for="notes" class="block text-gray-700 mb-1">Special Requests</label>
                            <textarea id="notes" name="notes" rows="3" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">Submit Order</button>
                    </form>
                </div>
                <div class="lg:w-1/2">
                    <div class="bg-green-50 p-8 rounded-lg h-full">
                        <h3 class="text-2xl font-semibold mb-4 text-green-700">Egg Order Information</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-info-circle text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Availability</h4>
                                    <p class="text-gray-600">Eggs are typically available year-round, with highest production in spring and summer.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Pickup Location</h4>
                                    <p class="text-gray-600">Farm pickup only at Walker's Edge Farm, 123 Rural Route, Countryside, ST 12345</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-clock text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Pickup Hours</h4>
                                    <p class="text-gray-600">Monday-Friday: 3pm-6pm<br>Saturday: 9am-12pm<br>Closed Sundays</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-egg text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Egg Care</h4>
                                    <p class="text-gray-600">Our eggs are unwashed to preserve their natural protective coating. Store in refrigerator for longest shelf life.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-dollar-sign text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Payment</h4>
                                    <p class="text-gray-600">Cash or check accepted at pickup. Credit cards may be arranged in advance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-exclamation-circle text-yellow-500"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-yellow-700">
                                        <strong>Note:</strong> We'll contact you within 24 hours to confirm your order and pickup time. Orders must be picked up within 2 days of selected date or they will be released to other customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-green-800 text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <div class="lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Farm family" class="rounded-lg shadow-xl w-full">
                </div>
                <div class="lg:w-1/2">
                    <h2 class="text-3xl font-bold mb-6">Our Farm Story</h2>
                    <p class="mb-4 text-lg">Walker's Edge Farm was established in 2024 by the Walker family with a vision to create a sustainable, family-run farm that provides high-quality products to our local community.</p>
                    <p class="mb-4">What began as a small homestead with a few chickens has grown into a diverse farm operation raising highland cattle, myotonic goats, and producing eggs, vegetables, and pumpkins.</p>
                    <p class="mb-6">We believe in ethical animal husbandry, sustainable farming practices, and building connections between people and their food sources. Our animals are raised with care, allowed to express their natural behaviors, and contribute to the health of our land.</p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center bg-green-700 px-4 py-2 rounded-lg">
                            <i class="fas fa-heart mr-2"></i>
                            <span>Animal Welfare Focused</span>
                        </div>
                        <div class="flex items-center bg-green-700 px-4 py-2 rounded-lg">
                            <i class="fas fa-leaf mr-2"></i>
                            <span>Sustainable Practices</span>
                        </div>
                        <div class="flex items-center bg-green-700 px-4 py-2 rounded-lg">
                            <i class="fas fa-users mr-2"></i>
                            <span>Family Operated</span>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-xl font-semibold mb-4">Connect With Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.instagram.com/walkersedgefarm" target="_blank" class="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="bg-gray-800 hover:bg-black w-10 h-10 rounded-full flex items-center justify-center text-white">
                                <i class="fab fa-tiktok"></i>
                            </a>
                            <a href="#" class="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-green-800">What Our Customers Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-yellow-500 mr-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"The duck eggs from Walker's Edge are incredible for baking - so rich and flavorful! My cakes have never been better."</p>
                    <div class="flex items-center">
                        <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">SJ</div>
                        <div>
                            <h4 class="font-semibold">Sarah J.</h4>
                            <p class="text-sm text-gray-500">Local Baker</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-yellow-500 mr-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"We purchased two myotonic goat kids last spring and they've been such a joy. The Walkers provided great care instructions."</p>
                    <div class="flex items-center">
                        <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">TM</div>
                        <div>
                            <h4 class="font-semibold">The Miller Family</h4>
                            <p class="text-sm text-gray-500">New Goat Owners</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="text-yellow-500 mr-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"The farm tour was educational and fun for our whole family. The kids loved collecting eggs and meeting all the animals!"</p>
                    <div class="flex items-center">
                        <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">KW</div>
                        <div>
                            <h4 class="font-semibold">Kevin W.</h4>
                            <p class="text-sm text-gray-500">Visiting Family</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Visit Us</h2>
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/2">
                        <h3 class="text-xl font-semibold mb-4 text-green-700">Contact Information</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Address</h4>
                                    <p class="text-gray-600">123 Rural Route<br>Countryside, ST 12345</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-phone-alt text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Phone</h4>
                                    <p class="text-gray-600">(123) 456-7890</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-envelope text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Email</h4>
                                    <p class="text-gray-600">Walkersedgefarm@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-clock text-green-600 mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Farm Stand Hours</h4>
                                    <p class="text-gray-600">Wednesday-Friday: 3pm-6pm<br>Saturday: 9am-12pm</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold mb-4 text-green-700">Follow Our Journey</h3>
                            <p class="mb-4 text-gray-600">For daily farm updates, animal photos, and product availability:</p>
                            <a href="https://www.instagram.com/walkersedgefarm" target="_blank" class="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">
                                <i class="fab fa-instagram mr-2"></i>
                                @walkersedgefarm
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="bg-gray-100 p-4 rounded-lg h-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018566!2d-73.9878449245375!3d40.74844097138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689878817583!5m2!1sen!2sus" width="100%" height="100%" style="min-height: 300px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-green-900 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tractor text-2xl"></i>
                        <span class="text-xl font-bold">Walker's Edge Farm</span>
                    </div>
                    <p class="mt-2 text-green-200">Family farm established in 2024</p>
                </div>
                <div class="flex space-x-6">
                    <a href="#home" class="hover:text-yellow-300 transition">Home</a>
                    <a href="#products" class="hover:text-yellow-300 transition">Products</a>
                    <a href="#order" class="hover:text-yellow-300 transition">Order Eggs</a>
                    <a href="#about" class="hover:text-yellow-300 transition">About</a>
                    <a href="#contact" class="hover:text-yellow-300 transition">Contact</a>
                </div>
            </div>
            <div class="border-t border-green-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p class="text-green-300 text-sm mb-4 md:mb-0">© 2024 Walker's Edge Farm. All rights reserved.</p>
                <div class="flex space-x-4">
                    <a href="https://www.instagram.com/walkersedgefarm" target="_blank" class="text-green-300 hover:text-white">
                        <i class="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" class="text-green-300 hover:text-white">
                        <i class="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" class="text-green-300 hover:text-white">
                        <i class="fab fa-tiktok text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Form submission
        document.getElementById('egg-order-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const eggType = document.getElementById('egg-type').value;
            const quantity = document.getElementById('quantity').value;
            
            // Simple validation
            if(name && email && eggType && quantity) {
                // In a real application, you would send this data to your server
                alert(`Thank you, ${name}! Your order for ${quantity} ${eggType} has been received. We'll email confirmation to ${email}.`);
                
                // Reset form
                this.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });

        // Set minimum date for order pickup (tomorrow)
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const yyyy = tomorrow.getFullYear();
        
        const minDate = yyyy + '-' + mm + '-' + dd;
        document.getElementById('pickup-date').setAttribute('min', minDate);
    </script>
</body>
</html>
