# README for codedex-hack repo

## Members: Keenan, Harshika, Prin

This repo includes our project submission for Codedex's Summer Hackathon, 2024. We tackled track 1 for Sip N Play's website
Link to our project website hosted by Vercel: https://codedex-hack.vercel.app/

### Notes:

Events page contains an embedded google calandar. We decided to take this approach because Sip N Play already has a google account. By replacing our demo embedded calandar with their own, the calandar on the website will sync with any events made by Sip N Play's google account. Further development could see the google calander sync with Facebook events, and auto update to include any events posted to Facebook. Discord bots can also be created to sync event channel postings with new events from the Google calandar. The full breadth of these features could not be implemented without proper authorization and access to Facebook and Discord accounts, so this note aims to explain the full intention and idea behind the choice for an embedded Google Calandar.