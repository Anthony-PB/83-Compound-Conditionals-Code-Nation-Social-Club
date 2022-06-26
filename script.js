$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    let correctUsername = "SparkingChumps";
    let correctPassword = "Boolean987";
    if (username === correctUsername && password === correctPassword){$(".message").text("Success!");
    }else if(username !== correctUsername && password === correctPassword){$(".message").text("Username is incorrect.");
    }else if(username === correctUsername && password !== correctPassword){$(".message").text("Password is incorrect.");
}else if(username === "" && password === ""){$(".message").text("Enter a Username and Password.");
}else if(username !== correctUsername && password !== correctPassword && username !== "" && password !== "" && username !== "69" && password !== "69" && username !== "420" && password !== "420"){$(".message").text("Invalid Login Details");
}else if(username === "69" && password === "69" || username === "420" && password === "420"){$(".message").text("SHEEEESH");
}


});