
Game should have the ability to create a new session with just a url endpoint.
when new session is created, game asks:
how many players 
Would you like to play: 
    + easy (no timer, dictionary available)
    + medium (timer, dictionary available)
    + hard (timer, no dictionary)

## Dictionary API :
Would you like to check your words in the dictionary prior to submitting? <br>
*Note: If you submit and your created word is not a real word, you will not be given any points.*

Issues:
+ can't remove letter once you place it.
  - have a local state that updates the hand to remove the letter you clicked
  (number of letters is a problem. look at how the hand length is determined)
+ multiple letters that are the same will be a problem
    -
    
  V  can click on p or div instead of parent span 
     If onClick, there is already a selected, put selected back
     