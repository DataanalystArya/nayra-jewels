import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Set "mo:core/Set";

actor {
  // Types
  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    description : Text;
    price : Nat;
    inStock : Bool;
    featured : Bool;
    material : Text;
    weight : Text;
  };

  type CartItem = {
    productId : Nat;
    quantity : Nat;
  };

  type BridalAppointment = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    preferredDate : Text;
    occasion : Text;
    budget : Text;
    message : Text;
    status : Text;
    createdAt : Int;
  };

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    createdAt : Int;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  // Storage
  let products = Map.empty<Nat, Product>();
  let carts = Map.empty<Principal, Map.Map<Nat, CartItem>>();
  let wishlists = Map.empty<Principal, Set.Set<Nat>>();
  let appointments = Map.empty<Nat, BridalAppointment>();
  let contactMessages = Map.empty<Nat, ContactMessage>();

  // Counters
  var nextProductId = 1;
  var nextAppointmentId = 1;
  var nextMessageId = 1;

  // Seed Products
  let initialProducts : [Product] = [
    {
      id = 1;
      name = "Royal Kundan Necklace Set";
      category = "Necklace";
      description = "Exquisite Kundan work with gold plating";
      price = 250000;
      inStock = true;
      featured = true;
      material = "Gold, Kundan";
      weight = "45g";
    },
    {
      id = 2;
      name = "Polki Diamond Jhumkas";
      category = "Earrings";
      description = "Traditional jhumka earrings with real Polki diamonds";
      price = 180000;
      inStock = true;
      featured = false;
      material = "Gold, Diamonds";
      weight = "22g";
    },
    {
      id = 3;
      name = "Meenakari Chooda Bangles";
      category = "Bangles";
      description = "Vibrant bridal bangles with Meenakari art";
      price = 95000;
      inStock = true;
      featured = true;
      material = "Gold, Lacquer";
      weight = "35g";
    },
    {
      id = 4;
      name = "Rose Gold Maang Tikka";
      category = "Maang Tikka";
      description = "Elegant maang tikka with rose gold finish";
      price = 40000;
      inStock = true;
      featured = false;
      material = "Rose Gold";
      weight = "12g";
    },
    {
      id = 5;
      name = "Temple Jewellery Necklace";
      category = "Necklace";
      description = "South Indian style temple jewellery with intricate motifs";
      price = 75000;
      inStock = true;
      featured = true;
      material = "22K Gold";
      weight = "60g";
    },
    {
      id = 6;
      name = "Pearl Choker";
      category = "Choker";
      description = "Elegant multi-strand pearl choker";
      price = 55000;
      inStock = true;
      featured = false;
      material = "Pearls, Gold";
      weight = "30g";
    },
    {
      id = 7;
      name = "Polki Cocktail Ring";
      category = "Rings";
      description = "Statement ring with large Polki diamond centerpiece";
      price = 80000;
      inStock = true;
      featured = true;
      material = "Gold, Polki Diamonds";
      weight = "15g";
    },
    {
      id = 8;
      name = "Kadas with Ruby Studs";
      category = "Kadas";
      description = "Heavy kadas with ruby and gold work";
      price = 110000;
      inStock = true;
      featured = false;
      material = "Gold, Rubies";
      weight = "55g";
    },
    {
      id = 9;
      name = "Antique Nose Ring";
      category = "Nose Ring";
      description = "Traditional Maharashtrian nath with emeralds";
      price = 15000;
      inStock = true;
      featured = true;
      material = "Gold, Emeralds";
      weight = "7g";
    },
    {
      id = 10;
      name = "Bridal Heavy Set";
      category = "Necklace";
      description = "Full bridal set with multiple layers and Kundan work";
      price = 350000;
      inStock = true;
      featured = true;
      material = "Gold, Kundan, Diamonds";
      weight = "120g";
    },
  ];

  // Initialize products
  for (product in initialProducts.values()) {
    products.add(product.id, product);
  };
  nextProductId := 11;

  // Product Functions
  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductById(id : Nat) : async ?Product {
    products.get(id);
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(func(p) { p.category == category }).sort();
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product] {
    products.values().toArray().filter(func(p) { p.featured }).sort();
  };

  public shared ({ caller }) func addProduct(
    name : Text,
    category : Text,
    description : Text,
    price : Nat,
    inStock : Bool,
    featured : Bool,
    material : Text,
    weight : Text,
  ) : async Nat {
    let product : Product = {
      id = nextProductId;
      name;
      category;
      description;
      price;
      inStock;
      featured;
      material;
      weight;
    };
    products.add(nextProductId, product);
    nextProductId += 1;
    product.id;
  };

  // Cart Functions
  public query ({ caller }) func getCart() : async [CartItem] {
    let cart = switch (carts.get(caller)) {
      case (null) { return [] };
      case (?cart) { cart };
    };
    cart.values().toArray();
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    if (quantity == 0) { Runtime.trap("Quantity must be at least 1") };

    let cart = switch (carts.get(caller)) {
      case (null) { Map.empty<Nat, CartItem>() };
      case (?cart) { cart };
    };

    let existingCartItem = cart.get(productId);

    let newQuantity = switch (existingCartItem) {
      case (null) { quantity };
      case (?item) { item.quantity + quantity };
    };

    let cartItem : CartItem = {
      productId;
      quantity = newQuantity;
    };

    cart.add(productId, cartItem);
    carts.add(caller, cart);
  };

  public shared ({ caller }) func removeFromCart(productId : Nat) : async () {
    let cart = switch (carts.get(caller)) {
      case (null) { Map.empty<Nat, CartItem>() };
      case (?cart) { cart };
    };
    cart.remove(productId);
    carts.add(caller, cart);
  };

  public shared ({ caller }) func clearCart() : async () {
    carts.remove(caller);
  };

  // Wishlist Functions
  public query ({ caller }) func getWishlist() : async [Nat] {
    let wishlist = switch (wishlists.get(caller)) {
      case (null) { return [] };
      case (?wishlist) { wishlist };
    };
    wishlist.toArray();
  };

  public shared ({ caller }) func addToWishlist(productId : Nat) : async () {
    let wishlist = switch (wishlists.get(caller)) {
      case (null) { Set.empty<Nat>() };
      case (?wishlist) { wishlist };
    };
    wishlist.add(productId);
    wishlists.add(caller, wishlist);
  };

  public shared ({ caller }) func removeFromWishlist(productId : Nat) : async () {
    let wishlist = switch (wishlists.get(caller)) {
      case (null) { Set.empty<Nat>() };
      case (?wishlist) { wishlist };
    };
    wishlist.remove(productId);
    wishlists.add(caller, wishlist);
  };

  public query ({ caller }) func isInWishlist(productId : Nat) : async Bool {
    let wishlist = switch (wishlists.get(caller)) {
      case (null) { return false };
      case (?wishlist) { wishlist };
    };
    wishlist.contains(productId);
  };

  // Appointment Functions
  public shared ({ caller }) func bookBridalAppointment(
    name : Text,
    email : Text,
    phone : Text,
    preferredDate : Text,
    occasion : Text,
    budget : Text,
    message : Text,
  ) : async Nat {
    let appointment : BridalAppointment = {
      id = nextAppointmentId;
      name;
      email;
      phone;
      preferredDate;
      occasion;
      budget;
      message;
      status = "pending";
      createdAt = Time.now();
    };
    appointments.add(nextAppointmentId, appointment);
    nextAppointmentId += 1;
    appointment.id;
  };

  public query ({ caller }) func getAllAppointments() : async [BridalAppointment] {
    appointments.values().toArray();
  };

  public shared ({ caller }) func updateAppointmentStatus(id : Nat, status : Text) : async () {
    let appointment = switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
    let updatedAppointment = { appointment with status };
    appointments.add(id, updatedAppointment);
  };

  // Contact Functions
  public shared ({ caller }) func submitContactMessage(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async Nat {
    let contactMessage : ContactMessage = {
      id = nextMessageId;
      name;
      email;
      phone;
      message;
      createdAt = Time.now();
    };
    contactMessages.add(nextMessageId, contactMessage);
    nextMessageId += 1;
    contactMessage.id;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray();
  };
};
