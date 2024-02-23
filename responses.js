function getBotResponse(input) { 
    if (input == "yes") {
        return "Kindly place your order.";
    }   
    else if (input == "laptop" || input == "monitor" || input == "storage device" || input == "printer" || input == "musical instrument" || input == "sound bars" || input == "I-Pad" || input == "watch" || input == "smartphone" || input == "headphone" || input == "security camera" || input == "router") {
        return "Added to Kart.";
    }   
    else if(input == "book") {
        return "Enter book number.";
    }
    else if (input == "1"|| input == "2"|| input == "3"|| input == "4"|| input == "5"|| input == "6"|| input == "7"|| input == "8"|| input == "9"|| input == "10"|| input == "11"|| input == "12"|| input == "13"|| input == "14"|| input == "15") {
        return "Added to Kart.";
    }
    else if (input == "done") {
        return "Would you like to modify your order?";
    }
    else if (input == "yes") {
        return "Kindly place your order here. (type 'done' once completed)";
    }
    else if (input == "no") {
        return "Order successfully placed. Thank you!";
    }
    else {
        return "Invalid input!";
    }
}