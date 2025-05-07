// Copyright (c) 2025 May 2025 All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the cost of the movie experience.
 */
function calculateMovieCost() {
  // input
  const ticketType = document.querySelector('input[name="ticket-type"]:checked').value;
  const popcornSize = document.getElementById('popcorn-size').value;
  const drinkChoice = document.getElementById('drink-choice').value;
  const tax = 1.13;

  // base ticket prices
  let ticketPrice = 12;
  if (ticketType === "vip") {
    ticketPrice = 18;
  } else if (ticketType === "imax") {
    ticketPrice = 22;
  }

  // popcorn price
  let popcornPrice = 5;
  if (popcornSize === "medium") {
    popcornPrice = 7;
  } else if (popcornSize === "large") {
    popcornPrice = 9;
  }

  // drink price
  let drinkPrice = 3;
  if (drinkChoice === "juice") {
    drinkPrice = 4;
  }

  // total cost
  const totalCost = (ticketPrice + popcornPrice + drinkPrice) * tax;
  document.getElementById('result').innerHTML = "<p>The total cost of your movie experience is: $" + totalCost.toFixed(2) + ". </p>";
}
