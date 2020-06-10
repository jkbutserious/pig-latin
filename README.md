# Webpage: Pig Latin

#### Project for Epicodus on BDD, 6.10.2020

#### By Michael Watts, Jeff Kim, and Vanessa Guerrero

## Description

The purpose of this project is to create a webpage that will translate English to Pig Latin.

## Setup/Installation Requirements

* Find the repository of this application [here](https://github.com/jkbutserious/pig-latin.git) and click the green "Clone or Download Folder" to download a zip file with all its contents.
* Once file is downloaded, open with Visual Studio Code or the text editor of your choice to view the code.
* To view and intereact with the webpage using Visual Studio Code, click on Terminal > New Terminal. Once a terminal opens, type "open index.html" and hit enter. This will open the page onto a browser window.


## Specs
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "hay" to single words beginning with a vowel.
Example Input: i
Example Output: ihay

The program moves the first consonant of a word to the end.
Example Input : dog
Example Output : ogd

The program treats "y" as a consonant in words that begin with "y"
Example Input : yes
Example Output : esy

The Program moves all consective consonants in a word to the end of that word.
Example Input: chair
Example Output: airch

The Program treats "u" as a consonant when following a "q"
Example Input: quelch
Example Output elchqu

The Program adds "ay" to multi-charactered words beginning with a consonant.
Example Input: cat
Example Output: atcay

The program recognizes vowels and consonants regardless of case
Example Input: HORSE
Example Output: ORSEHay

The Program converts all output to lower case.
Example Input: MONKEY
Example Output: onkeymay

The Program recognizes vowels and consonants in multi-cased words.
Example Input: ElePHANt
Example Output: elephantway

## Known Bugs

There are no known bugs.

## Support and contact details

For feedback or concerns about this project, please contact one of the conbributors.

## Technologies Used

This project is created using:
* HTML
* CSS
* JavaScript
* JQuery

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2020 Michael Watts, Jeff Kim, and Vanessa Guerrero 