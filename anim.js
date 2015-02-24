
// put elements on page
document.write('<link rel=\"stylesheet\" type=\"text\/css\" href=\"style.css\">');
document.write('<div class=\"content\"><\/div>');

/* ******************
 * GLOBAL VARIABLES *
 * ******************/
window.$content = $('.content');

/* ******************
 * GLOBAL FUNCTIONS *
 * ******************/

window.betterInterval = function(execute, timeout, delayFirst) {
  execute.stop = false;
  execute.stopped = false;
  if(delayFirst){ execute(); }
  (function subroutine() {
    setTimeout(function() {
      if(!execute.stop){
        execute();
        subroutine();
      }else{ execute.stopped = true; }
    }, timeout);
  })();
};

window.randomQuote = function(){
  return quotes[Math.floor(Math.random() * quotes.length)];
};
window.changeQuote = function(){
  $content.fadeOut('slow', function(){
    $content.html(randomQuote());
    $content.fadeIn('slow');
  });
};

/* **************
 * BEGIN JQUERY *
 * **************/

$(function(){

  /* ****************
   * EVENT HANDLERS *
   * ****************/


  /* **************
   * DEFAULT CODE *
   * **************/

  betterInterval(changeQuote, 4000, true);
   
});

var quotes = [ 
  "<div class=\"quote\">\"It's showtime!\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"Alright everyone, chill.\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Allow me to break the ice.\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"I need your clothes, your boots, and your motorcycle.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">Bystander: \"HEY! What the hell did you do to him, man?!\"<br />Arnold: \"I did nothing. The pavement was his enemy.\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">\"Dillon! you sonofabitch.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"Now listen to me very carefully.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">Arnold (pre-recorded): \"You, are not you. You're me.\"<br />Arnold: \"No shit.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">Terrorist: \"If you want your kid back, you're gonna have to cooperate. Right?\"<br />Arnold: \"Wrong.\"<br /><span class=\"action\">*shot to the head*</span><br /></div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"I'm going to ask you a bunch of questions, and I want to have them answered immediately.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">Arnold: \"Now I'm gonna untie you, and then you're gonna get dressed, and then you're gonna come with me.\"<br />Amber: \"Oh yeah? But why should I?\"<br />Arnold: \"Because I'm gonna say 'please'...\"<br /><span class=\"action\">*lifts bed she's tied to towards 8th story window*</span><br /></div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">Killian: \"You bastard. Drop dead!\"<br />Arnold: \"I don't do requests.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">Killian: \"Do you know who I am?\"<br />Arnold: \"I've seen you before. You're the asshole on TV.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">Tony: \"You got a lot of nerve showing your face around here, Hauser.\"<br />Arnold: \"Heh, look who's talking.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">Melina: \"What you been feeding this thing?\"<br /><span class=\"action\">*grabs his junk*</span><br />Arnold: \"Blondes.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Ha! Crom laughs at your Four Winds.\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">Arnold: \"You're a funny guy, Sully, I like you.\"<br />Sully: <span class=\"action\">*smiles*</span><br />Arnold: \"That's why I'm going to kill you last.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"Bullshit.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"That's bullshit.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"C'mon, don't bullshit me.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"You set us up! It's all bullshit! All of it!!\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">John Connor: \"Jesus, You were gonna kill that guy!\"<br />Arnold: \"Of course. I'm a terminator.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">Jehnna: \"I suppose nothing hurts you.\"<br />Arnold: \"Only pain.\"</div><div class=\"movie-title\">-- Conan the Destroyer (1984)</div>",
  "<div class=\"quote\">Clerk: \"Hey! Are you gonna pay for that??\"<br />Arnold: \"Talk to the hand.\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\"><span class=\"action\">*shirtless, wielding knife*</span><br /> \"Come on Bennett. Let's party.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">Guard: \"Give us the girl or we'll take her.\"<br />Arnold: \"Enough talk!\"<br /><span class=\"action\">*throws knife into guard's chest*</span><br /></div><div class=\"movie-title\">-- Conan the Destroyer (1984)</div>",
  "<div class=\"quote\">\"Into the boat!\"</div><div class=\"movie-title\">-- Conan the Destroyer (1984)</div>",
  "<div class=\"quote\">\"Into the tunnel!\"</div><div class=\"movie-title\">-- Conan the Destroyer (1984)</div>",
  "<div class=\"quote\">\"GET TO THE CHOPPAAAAAAAA\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">Lori: \"Sweetheart.. we're married!\"<br />Arnold: \"Consider that a divorce.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Chill out... dickwad.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"Hello, cutie pie! One of us is in deeeep trouble.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"I'm pregnant.\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\">Kid: \"It might be a tumor?\"<br />Arnold: \"It's not a tumor! It's not a tumor, at all.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*grabs man by the collar*</span><br /> \"STOP... CHEERING ME UP\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"No problemo.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\"><span class=\"action\">*punch*</span><br />\"That's for sleeping with my wife. In a damn minivan.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"Grant me revenge! And if you do not listen, then the hell with you!\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"The hell you will...\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"The hell with you.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"Who the hell are you??\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"My name is John Kimble...\"<br /><span class=\"action\">*cocks shotgun*</span><br />\"And I love my car.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">Dude: \"You're shittin' me!\"<br />Arnold: \"I am not shitting on you.\"</div><div class=\"movie-title\">-- Red Heat (1988)</div>",
  "<div class=\"quote\">\"Hey, you want to be a farmer? Here's a couple of acres.\"<br /><span class=\"action\">*kicks guy across the street*</span><br /></div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\"><span class=\"action\">*knocks guys out into urinal, flushes*</span><br />\"Here, cool off.\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\"><span class=\"action\">*impales guy to wall*</span><br />\"Stick around.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"Give you a lift?\"<br /><span class=\"action\">*lifts up, throws guy off building*</span><br /></div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\"><span class=\"action\">*kicks down door*</span><br />\"Knock knock.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"Como estas?\"<br /><span class=\"action\">*stabs soldier*</span><br /></div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"You're fired.\"<br /><span class=\"action\">*shoots missile into helicopter*</span><br /></div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\"><span class=\"action\">*shoots alligator in face*</span><br />\"You're luggage.\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"You're a stupid.\"</div><div class=\"movie-title\">-- Red Heat (1988)</div>",
  "<div class=\"quote\"><span class=\"action\">*ice cream truck explodes*</span><br />\"Iced that guy... to cone a phrase.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\"><span class=\"action\">*car crashes into cola billboard*</span><br />\"Well that hit the spot.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"To be... or not to be?\"<br /><span class=\"action\">*lights cigar as building explodes*</span><br />\"Not to be.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"The ice man cometh!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Hey, lighthead! Hey, christmas tree!\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">Buzzsaw: \"I love this saw. This saw's part of me. And I'M GONNA MAKE IT PART OF YOU!\"<br />Arnold: \"That's alright, keep it!\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">Amber: \"I'm warning you, I get sick. Air sick, car sick. I'm gonna throw up all over you.\"<br />Arnold: \"Go ahead. Won't show on this shirt.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\"><span class=\"action\">*after cutting Buzzsaw in half*</span><br />Amber: \"What happened to Buzzsaw??\"<br />Arnold: \"Ahh, he had to split.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"Doesn't anyone stay dead anymore?\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"Let's... kick some ice.\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"This is war.\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">Jehnna: \"Conan, what is best in life?\"<br />Arnold: \"To crush your enemies, see them driven before you, and hear the lamentation of their women.\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"If it bleeds... we can kill it.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"Now this is the plan: get your ass to Mars.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*shoots a guy while diving into cover*</span><br />Lee: \"You're late.\"<br />Arnold: \"Traffic.\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">Doorman: \"Your invitation, please?\"<br />Arnold: \"Sure. Here's my invitation.\"<br /><span class=\"action\">*detonates charge, destroying building*</span><br /></div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"What killed the dinosaurs? The ice age!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Crom!\"</div><div class=\"movie-title\">-- Conan the Destroyer (1984)</div>",
  "<div class=\"quote\">\"Frosty?\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Mac! MAAAAAAAC!\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"The riddle... of steel!\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">Protester: \"God doesn't want you to go in there. Don't go in there, man!\"<br />Arnold: \"Well then god shouldn't have killed my dog.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">Arnold: \"You should clone yourself.\"<br />Drucker: \"Why's that?\"<br />Arnold: \"So you can go fuck yourself.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">Doctor: \"She's dead.\"<br />Arnold: \"You LIIIIIEEEE!!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">Arnold: \"I'm not a pervert! I'm just looking for a Turbo Man doll!!\"<br />Santa: \"You want a Turbo Man for Christmas?\"<br />Arnold: \"Forget it. I'm not going to sit on your lap.\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"Bring the toy back, bring the toy back to the carpet, bring it back to the carpet!!\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">\"Take your toy back to the carpet. TAKE IT BACK!!\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">\"For the first time in my life, I'm... PISSED OFF!!\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\"><span class=\"action\">*choking scientist*</span><br /> \"My name... is not Quaid!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">Vincent: \"Stop it.\"<br />Arnold: \"No, I won't stop it, I want my baby!\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">Vincent: \"Money talks and bullshit walks!\"<br />Arnold: \"How can bullshit walk?\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">Arnold: \"I don't know what the problem is, but I'm sure it can be solved without resorting to violence.\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">\"But I'm ALL woman.\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\"><span class=\"action\">*whispering*</span><br /> \"My nipples are very sensitive.\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\">\"Feel how soft my skin is!\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\">Arnold: \"Stop being such a pussy!\"<br />Chicago: \"You fuckin' shot me!\"<br />Arnold: \"It's just a scratch!\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">Arnold: <span class=\"action\">*surprised*</span><br /> \"You're bleeding!\"<br />Chicago: \"Of course I'm bleeding! You fuckin' shot me!\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">\"I do not want to touch his ass. I want to make him talk.\"</div><div class=\"movie-title\">-- Red Heat (1988)</div>",
  "<div class=\"quote\">\"Ok, but make it quick. My horse is getting tired.\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"I need a vacation.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"OH SHIT!\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\">\"Shit!\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"Shit.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"Shit!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Shit... SHIT!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"SHIT!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*hitting helicopter controls*</span><br /> \"Come on you piece of shit... fly or DIE!\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"We are going to play a wonderful game called who is your daddy, and what does he do?\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">\"I'm a cybernetic organism, living tissue over a metal endoskeleton.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"Come with me if you want to live.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"Danger is my trade.\"</div><div class=\"movie-title\">-- Red Sonja (1985)</div>",
  "<div class=\"quote\">\"I'm the famous comedian, Arnold Brawnschwaigger!\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"Now remember, I could break your neck like a chicken's.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"You are mine now, you belong to me! You're not gonna have your mommies run behind you anymore and wipe your tushies. No more complaining, no more 'Mr. Kimble let me go to the bathroom', nothing! THERE IS NO BATHROOM.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">\"Shut up.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"Shut up!\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"SHUUUT UUUPPP!\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"Shut up!\"</div><div class=\"movie-title\">-- Junior (1994)</div>",
  "<div class=\"quote\">\"SHUT AAAAAAAAAAAHHHHHPPPPPP!!!!\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*pulls out gun*</span><br /> \"Shut up.\"</div><div class=\"movie-title\">-- Raw Deal (1986)</div>",
  "<div class=\"quote\"><span class=\"action\">*wife throws a full cake at him*</span><br /> \"You should not drink and bake.\"</div><div class=\"movie-title\">-- Raw Deal (1986)</div>",
  "<div class=\"quote\">\"Fuck. You.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"Fuck you.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"Fuck you, asshole.\"</div><div class=\"movie-title\">-- The Terminator (1984)</div>",
  "<div class=\"quote\">\"Fuck you.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Fuck you.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">Guard: \"Fuck you, asshole.\"<br /><span class=\"action\">*gun clicks, empty*</span><br />Arnold: \"No, fuck YOU asshole!\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"The guy's a fucking asshole.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Assholes.\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"Dickhead!\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">\"Scumbag.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"Sluts!\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"Bastards!!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*staring down a predator*</span><br /> \"One. Ugly. Motherfucker.\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\"><span class=\"action\">*staring down a predator*</span><br /> \"What the HELL are you?\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"Who the fuck are you?\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"Jesus Marge! What the FUCK!!\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"YOU BLEW MY COVER!!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"He molested, murdered, and mutilated her!\"</div><div class=\"movie-title\">-- Raw Deal (1986)</div>",
  "<div class=\"quote\">\"It's as satisfying to me as uh... coming is. Like having sex with a woman and coming.\"</div><div class=\"movie-title\">-- Arnold Schwarzenegger, on concentration curls</div>",
  "<div class=\"quote\">\"Milk is for babies. When you grow up you have to drink beer!\"</div><div class=\"movie-title\">-- Arnold Schwarzenegger, Pumping Iron (1977)</div>",
  "<div class=\"quote\">\"FREEZE IN HELL BATMAAAAAN!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"You killed my father. Big mistake.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"You've just been erased.\"<br /><span class=\"action\">*truck ploughs into guys car, blowing it up*</span><br /></div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"You are TERMINATED!\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\">\"See you at the party, Richter!\"<br /><span class=\"action\">*gleefully throws two limbs down an elevator shaft*</span><br /></div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Freeze well!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\"><span class=\"action\">*kills guy on airplane, places blanket and hat over face*</span><br />\"Excuse me- don't disturb my friend. He's dead tired.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\"><span class=\"action\">*loads bullets into gun in gun store*</span><br />Clerk: \"Hey, you can't do that!\"<br />Arnold: \"Wrong.\"<br /><span class=\"action\">*shoots guy in face*</span><br /></div><div class=\"movie-title\">-- The Terminator (1984)</div>",
  "<div class=\"quote\">\"When the governor gets here, call me.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">Cooke: \"This green beret's gonna kick yo big ass.\"<br />Arnold: \"I eat green berets for breakfast. And right now... I'm VERY HUNGRY.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"You've seen those movies where they say 'make my day' or 'I'm your worst nightmare'? Well listen to this one... rubber baby buggy bumpers.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"Ha hahaha ha ha! You think this is the real Quaid?\"<br /><span class=\"action\">*cops turn around, thinking it's a hologram*</span><br />\"It is.\"<br /><span class=\"action\">*shoots cops with machine gun*</span><br /></div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"You're not sending ME to the cooler...\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"I have my orders.\"</div><div class=\"movie-title\">-- Red Heat (1988)</div>",
  "<div class=\"quote\">Mall Cop: \"DROP THE GUN! Yeah, that's right drop the gun!\"<br />Arnold: \"Hey, I'm a police officer. This is an arrest.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">Mall Cop: \"Freeze!\"<br />Arnold: \"I'm a cop you eediot! I'm Detective John Kimble, this man is under arrest.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">Sacha: \"Where's your evidence?\"<br /><span class=\"action\">*pushes Sacha to the ground, opens his prosthetic leg, pours cocaine out*</span><br />Arnold: \"Cocainum.\"</div><div class=\"movie-title\">-- Red Heat (1988)</div>",
  "<div class=\"quote\">Partier: \"So who are you man?\"<br /><span class=\"action\">*cocks shotgun, shoots table*</span><br />Arnold: \"I'm the party pooper.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\"><span class=\"action\">*holding Sully over edge of roof*</span><br />Arnold: \"Remember Sully when I promised to kill you last?\"<br />Sully: \"Th-that's right Matrix, you did!\"<br />Arnold: \"I lied.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"No sequel for you.\"<br /><span class=\"action\">*shoots explosives*</span><br /></div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"I'll be back.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"I'll... be back.\"</div><div class=\"movie-title\">-- The Terminator (1984)</div>",
  "<div class=\"quote\">\"I'll be back.\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">\"I'll be back.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"I'll be BACK.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"I'll be back.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"I'm back.\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\">\"BWA HAHAHAHAHA!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Ahahahaha!\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"Get down.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"Get down!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Get down!\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\">\"Get down!\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"Get DOWN!!!\"</div><div class=\"movie-title\">-- Collateral Damage (2002)</div>",
  "<div class=\"quote\">\"Get down!!\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"Get down, or I'll put you down.\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">\"Get out.\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"Get out.\"</div><div class=\"movie-title\">-- The Terminator (1984)</div>",
  "<div class=\"quote\">\"Get out.\"</div><div class=\"movie-title\">-- Eraser (1996)</div>",
  "<div class=\"quote\">\"Get down.\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\">\"Hasta la vista. Baby.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\"><span class=\"action\">*impales guy onto steam chamber with pipe*</span><br />\"Let off some steam, Bennett.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"Here is Subzero. Now... Plain Zero.\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">General: \"Leave anything for us?\"<br />Arnold: \"Just bodies.\"</div><div class=\"movie-title\">-- Commando (1985)</div>",
  "<div class=\"quote\">\"Come on, Cohaagen! You got what you want. Give those people air!!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"What about the guy you lobotomized? Did he get a refund?\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">Benny: \"Hey man, I got five kids to feed!\"<br /><span class=\"action\">*hands him a wad of cash*</span><br />Arnold: \"Take them to the dentist.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Relax. You'll live longer.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"Do it. DO IT! Come on, kill me, I'm here! COME ON, DO IT NOW, KILL MEEEE!!\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"WOOOAAAHHHHHHHHHHHH\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"ARRRRRRRGGGGGGGH\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"GAAAAAAGGHHHHHH!\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"WWWAAAAAGGHHHHH\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"AAAAARRRRRGGGHHHHHHHHH\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"AAAAAAAAHHHHHHHHHH!!!!\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"GAAAAAAAHHHHHH\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"AAAAAAAAHHHHHHHHH\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">\"GWWWOOOHHHHHH\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"YYYAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGHHHHHHHHH\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">Ted: \"Mmmm! Oh, these cookies!\"<br />Arnold: \"Put the cookie down. NOW!!\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"Cookies? Who told you you could eat my cookies?\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"You want to fuck with me? You think you know bad, huh? You're a fucking CHOIR BOY to me. A CHOIR BOY.\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">\"SCREW YOOOOUUU\"<br /><span class=\"action\">*drills hole into Benny*</span><br /></div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"You cold blooded bastard... I'll tell you what I think of it. I live to see you eat that contract. But I hope you leave enough room for my fist, because I'm going to ram it into your stomach, and break your god damn spine!!!\"</div><div class=\"movie-title\">-- The Running Man (1987)</div>",
  "<div class=\"quote\">\"Could I speak to the drug dealer of the house please? It's a beautiful day and we're out killing drug dealers.\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">Kid: \"Hey mister, watch your talk!\"<br />Arnold: \"I can hear my talk, I cannot watch it.\"</div><div class=\"movie-title\">-- Hercules in New York (1969)</div>",
  "<div class=\"quote\">\"This is all a lie. I was framed. I am completely innocent!\"</div><div class=\"movie-title\">-- True Lies (1994)</div>",
  "<div class=\"quote\">\"Hercules doesn't need any money.\"</div><div class=\"movie-title\">-- Hercules in New York (1969)</div>",
  "<div class=\"quote\">Kid: \"Boys have a penis. Girls have a vagina.\"<br />Arnold: \"Thanks for the tip.\"</div><div class=\"movie-title\">-- Kindergarten Cop (1990)</div>",
  "<div class=\"quote\">\"Hercules goes where he wishes.\"</div><div class=\"movie-title\">-- Hercules in New York (1969)</div>",
  "<div class=\"quote\">\"I'm afraid that my position has left me... cold to your pleas of mercy.\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"If I'm not me, who the hell am I?\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"You have no respect for logic. And I have no respect for those with no respect for logic.\"</div><div class=\"movie-title\">-- Twins (1988)</div>",
  "<div class=\"quote\">\"Adam... and Evil.\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Your confusion is not rational. She is a healthy female of breeding age.\"</div><div class=\"movie-title\">-- Terminator 3: Rise of the Machines (2003)</div>",
  "<div class=\"quote\">\"What the hell is going on here? There's someone in my house, eating my birthday cake, and it's not me.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"I saved a life today, what the hell did you do?\"</div><div class=\"movie-title\">-- End of Days (1999)</div>",
  "<div class=\"quote\">\"You took my father's sword!\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"Knives. And stabbing weapons.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"What's the matter? The CIA got you pushing too many pencils?\"</div><div class=\"movie-title\">-- Predator (1987)</div>",
  "<div class=\"quote\">\"I remember days like this, when my father took me to the forest and we ate wild blueberries.\"</div><div class=\"movie-title\">-- Conan the Barbarian (1982)</div>",
  "<div class=\"quote\">\"If revenge is a dish best served cold... then put on your Sunday's finest, it's time to feast!\"</div><div class=\"movie-title\">-- Batman & Robin (1997)</div>",
  "<div class=\"quote\">\"Sue me, dickhead.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">\"When I said you should screw yourself... I didn't mean for you to take it literally.\"</div><div class=\"movie-title\">-- Total Recall (1990)</div>",
  "<div class=\"quote\">John: \"You've gotta promise me, you're not gonna kill anyone.... right?\"<br />Arnold: \"Right.\"<br /><span class=\"action\">*after shooting a guy in both shins*</span><br />Arnold: \"He'll live.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\">\"Try to stay dead this time.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">\"You have striked Hercules.\"</div><div class=\"movie-title\">-- Hercules in New York (1969)</div>",
  "<div class=\"quote\">\"It's just a doll... it's just a stupid little plastic doll.\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"Kill the heroes! Yes, kill them, kill them, yes!\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">\"You picked the wrong day.\"<br /><span class=\"action\">*punches reindeer in the face*</span><br /></div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"Fine chariot, but where are ze horses?\"</div><div class=\"movie-title\">-- Hercules in New York (1969)</div>",
  "<div class=\"quote\">\"It's turbo time.\"</div><div class=\"movie-title\">-- Jingle All the Way (1996)</div>",
  "<div class=\"quote\">\"NOOOO! Please, anything but my statue of me!\"</div><div class=\"movie-title\">-- Around the World in 80 Days (2004)</div>",
  "<div class=\"quote\">\"Gee, did you make a movie mistake? You forgot to reload the damn gun!\"</div><div class=\"movie-title\">-- Last Action Hero (1993)</div>",
  "<div class=\"quote\">John: \"Is it dead?\"<br />Arnold: \"Terminated.\"</div><div class=\"movie-title\">-- Terminator 2: Judgment Day (1991)</div>",
  "<div class=\"quote\"><span class=\"action\">*grabs box with cat in it*</span><br />\"Ok, enough philosophy. I've got to get going.\"</div><div class=\"movie-title\">-- The 6th Day (2000)</div>",
  "<div class=\"quote\">Kirby: \"Until next time.\"<br />Arnold: \"No chance.\"</div><div class=\"movie-title\">-- Commando (1985)</div>"
];
