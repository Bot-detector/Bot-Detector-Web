<template>
    <v-container>
        <div class='background'>
            <div class='navigationbox'>
                <router-link style='text-decoration: none;' to="/"><span class='navigationbar'>Home</span></router-link>
                <router-link style='text-decoration: none;' to="/account-information"><span class='navigationbar'>Account Search</span></router-link>
                <router-link style='text-decoration: none;' to="/banned-accounts"><span class='navigationbar'>Banned Accounts</span></router-link>
                <router-link style='text-decoration: none;' to="/contributors-and-supporters"><span class='navigationbar'>Contributors</span></router-link>
                <router-link style='text-decoration: none;' to="/faq"><span class='navigationbar'>FAQ</span></router-link>
                <router-link style='text-decoration: none;' to="/contact-us"><span class='navigationbar'>Contact Us</span></router-link>
            </div>
            <div class='topbanner'>
                <img class='topbanner' contain width='88%' src='../assets/top.gif'>
            </div>
        <div class='main'>
            <div>
                <div class='headerimage'>
                    <h1><img class='headerimage1' contain width='35px' src='../assets/GameAssets/questionmarkcake.png'>Frequently Asked Questions<img class='headerimage2' contain width='35px' src='../assets/GameAssets/questionmarkcake.png'></h1>
                </div>
                <p class = 'description'>
                    Have a question about the plugin? We've answered most of them here! If your question still has not been answered - feel free to message us on <a href='https://discord.com/invite/botdetector'><span class='link'>discord</span></a>! 
                </p>
            </div>

            <hr class='break'>

            <div class='description'>

                <h2 class='grouptitle'> Getting Started </h2>
                <h3 class='title'> Installing the Plugin </h3>
                <p class='description'>
                    1. Open RuneLite<br>
                    2. Navigate to the Configuration wrench on the Top Right of the Sidebar.<br>
                    3. Click on Plugin Hub at the very bottom.<br>
                    4. Type in Bot Detector in the search bar.<br>
                    5. Click Install<br>
                    6. Accept the warning message. (See the FAQ below if you have questions about this)<br>
                    7. Done!<br>
                </p>
                <hr class='break'>

                <h2 class='grouptitle'>Using the Plugin</h2>
                <h3 class='title'>The Plugin's Settings</h3>
                <div class='content'>
                    <table style='font-size: 15px; float:center;'>
                        <tr>
                            <th class='header'>Setting Type</th>
                            <th class='header'>Setting Name</th>
                            <th class='header'>Description</th>
                        </tr>
                        <tr>
                            <td>Upload</td>
                            <td>Anonymous Uploading</td>
                            <td>When enabled, your username will not be sent with your uploads. You also cannot manually flag players.</td>
                        </tr>
                        <tr>
                            <td>Upload</td>
                            <td>Send Names Only After Logout</td>
                            <td>Recommended for players with low bandwidth.</td>
                        </tr>
                        <tr>
                            <td>Upload</td>
                            <td>Attempt Send on Close</td>
                            <td>Attempts to upload names when closing Runelite while being logged in. Take note that enabling this option may cause the client to take a long time to close if our servers are being unresponsive.</td>
                        </tr>
                        <tr>
                            <td>Upload</td>
                            <td>Send Names Every *x* mins</td>
                            <td>Determines how often the information collected by the plugin is flushed to our servers. The maximum rate is once per 5 minutes.</td>
                        </tr>
                        <tr>
                            <td>Panel</td>
                            <td>Prediction Autocomplete</td>
                            <td>Allows for prediction auto-completion for dialogue box entry.</td>
                        </tr>
                        <tr>
                            <td>Panel</td>
                            <td>Show Feedback Textbox</td>
                            <td>Adds a textbox to the prediction feedback panel, so you can explain your choice in up to 250 characters. Make sure you type your feedback *before* you make your choice!</td>
                        </tr>
                        <tr>
                            <td>Panel</td>
                            <td>Panel Default Stats Tab</td>
                            <td>Sets panel default stats tab when the Plugin turns on.</td>
                        </tr>
                        <tr>
                            <td>Panel</td>
                            <td>Panel Font Size</td>
                            <td>Sets the font size of most of the Plugin's Panel elements.</td>
                        </tr>
                        <tr>
                            <td>Predict</td>
                            <td>Right-click 'Predict' Players</td>
                            <td>Allows you to right-click predict players, instead of having to type their name in the Plugin's panel manually.</td>
                        </tr>
                        <tr>
                            <td>Predict</td>
                            <td>'Predict' on Right-click 'Report'</td>
                            <td>If you right-click Report someone via Jagex's official in-game report system, the player will be automatically predicted in the Plugin's Panel.</td>
                        </tr>
                        <tr>
                            <td>Predict</td>
                            <td>'Predict' Copy Name to Clipboard</td>
                            <td>Copies the predicted player's name to your clipboard when right-click predicting.</td>
                        </tr>
                        <tr>
                            <td>Predict</td>
                            <td>'Predict' Default Color</td>
                            <td>If set, highlights unflagged/unfeedbacked players' 'Predict' option in the given color so that you can easily spot it on the in-game menu.</td>
                        </tr>
                        <tr>
                            <td>Predict</td>
                            <td>'Predict' Voted/Flagged Color</td>
                            <td>If set, highlights flagged/feedbacked players' 'Predict' option in the given color so that you can easily spot it on the in-game menu.</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>Enable Chat Status Messages</td>
                            <td>Inserts chat messages in your chatbox to inform you about your uploads being sent.</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>'!bdstats' Chat Command Detail Level</td>
                            <td>Enable processing the '!bdstats' command when it appears in the chatbox, which will fetch the message author's plugin stats and display them. Disable to reduce spam.</td>
                        </tr>
                    </table>
                </div>

                <h3 class='title'>Anonymous Mode</h3>
                <p class='description'>Anonymous Mode is enabled by default, which means your username will not be sent with your uploads. However, we cannot tally your uploads, and you will not be able to manually flag players.</p>
                <h3 class='title'>Understanding The Plugin Panel</h3>
                <div class='content'>
                    <img style='vertical-align: middle; margin-left: auto; margin-right: auto;' src='../assets/faqimages/playerstatspanel.png'>
                    <table style = 'font-size: 15px; float:center;'>
                        <tr style='text-align: center;'>
                            <th>Label</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Plugin Version</td>
                            <td>Indicates the Bot Detector Plugin version you are currently running.</td>
                        </tr>
                        <tr>
                            <td>Current Uploads</td>
                            <td>Tallies the number of uploads the plugin has performed for the current RuneLite session.</td>
                        </tr>
                        <tr>
                            <td>Total Uploads</td>
                            <td>Tallies the number of unique Names you've uploaded so far.</td>
                        </tr>
                        <tr>
                            <td>Feedback Sent</td>
                            <td>Tallies the number of prediction feedbacks you've sent to us so far.</td>
                        </tr>
                        <tr>
                            <td>Possible Bans</td>
                            <td>Tallies the number of unique Names you've uploaded that may have been banned. This is usually because a given Name stopped appearing on the official Hiscores.</td>
                        </tr>
                        <tr>
                            <td>Confirmed Bans</td>
                            <td>Tallies the number of unique Names you've uploaded confirmed to have been banned by Jagex Moderators.</td>
                        </tr>
                        <tr>
                            <td>Incorrect Flags</td>
                            <td>(Manual Tab Only) Tallies the number of unique Names you've flagged as bots that ended up being confirmed as real players by Jagex Moderators.</td>
                        </tr>
                        <tr>
                            <td>Flag Accuracy</td>
                            <td>(Manual Tab Only) Indicates your personal accuracy when manually flagging, determined by the previous two fields.</td>
                        </tr>
                    </table>
                    <p class='descriptor' style='font-weight: bold;'>Note for Anonymous Users: Except for Plugin Version and Current Uploads, all of these fields are disabled.</p>
                </div>

                <h3 class='title'>The Prediction Panel</h3>

                <div class='content'>
                    <img style='vertical-align: middle; margin-left: auto; margin-right: auto;' src='../assets/faqimages/predictpanel.png'>

                    <table style ='font-size:15px'>
                        <tr>
                            <th>Panel</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Primary Prediction</td>
                            <td>Displays the primary prediction label and confidence for the predicted player.</td>
                        </tr>
                        <tr>
                            <td>Prediction Breakdown</td>
                            <td>Displays a breakdown of confidences for other labels our algorithm considered. These are not considered in our manual reviews.</td>
                        </tr>
                        <tr>
                            <td>Prediction Feedback</td>
                            <td>Allows the user to send in a feedback for the **Primary Prediction** and choose the most appropriate available label.</td>
                        </tr>
                        <tr>
                            <td>Manual Flagging</td>
                            <td>Allows the user to upload the most recent sighting for the predicted player with an extra flag to tell us to pay more attention to that player.</td>
                        </tr>
                    </table>
                    <p class='description'>Note for ⚠️ Anonymous Users ⚠️: The *Manual Flagging* panel is disabled.</p>
                </div>

                <hr class='break'>

                <h2 class='grouptitle'>Understanding How the Plugin Works</h2>
                <p class='description'>
                    You, as a plugin user, automatically and passively send some information about every player you come across in-game to our servers.<br>
                    The information sent, all collected at the time of the player spawning on screen, includes:<br>
                    1. The display name of the player<br>
                    2. The exact world location of the player<br>
                    3. The world number<br>
                    4. The exact time of the sighting<br>
                    5. The visibly equipped gear of the player<br>
                    6. The GE gear value of the player<br>

                    <br>

                    We use this information to train one of our many machine learning models to identify patterns in accounts.<br>
                    Example: Smithing bots are accounts which have a very high Smithing level, wear no gear, and are typically seen in Edgeville and at the Blast Furnace.<br>
                    - We take their levels: High Smithing to Total ratio<br>
                    - We take their locations: Edgeville & Blast Furnace<br>
                    - We take their gear: Nothing<br>
                    - We take their timestamp: Usually on between 16:00 UTC and 22:00 UTC<br>
                    - Then we build a 'pattern' or label for those accounts. In this case, this would be labeled as `Smithing_bot`.<br>
                    <br>
                    Note: We usually have to gather data for several weeks or months in order to get enough viable training data! That way our estimations are quite close to the actual status of the accounts we are attempting to evaluate. After building enough accounts into a label, we then test the label on a variety of Machine Learning Models, and choose the best one to be used in evaluation. Here is an example output below:
                    <br>
                    <img style='vertical-align: middle; margin-left: auto; margin-right: auto;' contain height = '500px' src='../assets/faqimages/mlexample.png'>
                    <br>
                    Once we are happy with these results, we will then output the labels to you whenever you use the Plugin to predict a player. We will then await your feedback to see if our label is accurate enough to be used viably. If the label scores poorly, it will be pulled from the plugin and be reevaluated.
                    Once we are confident a given label performs well, we search our database for all accounts matching that label prediction with a very high confidence (typically above 90%) and send those names to Jagex for evaluation.
                    Jagex then lets us know if they're banned accounts or real players. If they're banned, they're marked as confirmed bans. If they're real players, they're marked as confirmed players. We then retain and reinforce the model from these confirmed ban/player marks.
                </p>
                
                <hr class='break'>
                <h2 class = 'grouptitle'>Questions and Answers</h2>
                <div class='content'>
                    <h4>Is this Plugin malicious?</h4>
                    <p>The Plugin can be installed through RuneLite's [Plugin Hub](https://runelite.net/plugin-hub) system, which is curated by the RuneLite developers to not allow anything that's even mildly suspect. If you have any doubt about the Plugin's inner workings, all of its components' source codes are available in this GitHub! You may also contact us through our Discord server if you have any questions you'd like answered.</p>

                    <h4>Why do I need a RuneLite Client/Plugin to capture OSRS names?</h4>
                    <p>RuneLite's APIs allow us to easily collect nearby players' location, gear and gear cost information, all of which prove to be viable in detecting potential bots. While we could simply scrape the entirety of the Runescape Hiscores for "bot-like" accounts, it would be quite inefficient. The combined information of active player names along with the aforementioned collected data gives our system much more power, especially for differentiating between bots and alt accounts.</p>

                    <h4>When I try to install the Plugin, I get a warning about it needing my IP address. What is this about?</h4>
                    <p>That is simply how the Internet works. As the Plugin needs to connect to our servers to send and receive data, your IP comes along for the ride. We do not log your IP address and **Anonymous Mode** is enabled by default, which means that we will not receive your Runescape Name with the data you send. You may however turn off the option yourself in the Plugin's settings to access extra features.</p>

                    <h4>I installed the Plugin, and it works, but it's not tallying my uploads? I also can't manually flag players as bots!</h4>
                    <p>**Anonymous Mode** is enabled by default. If it is enabled, we cannot associate your uploads with your Runescape Name. If you wish to tally your uploads, you'll need to disable Anonymous Mode in the Plugin's settings. In addition, we've disabled manual flagging for Anonymous users.</p>

                    <h4>I changed my Runescape Name and my tallies got reset!</h4>
                    <p>The only way we can easily attribute uploads is through the sender's Runescape Name. If you have a way of confirming to us your previous name, come talk to us on our Discord server where we may be able to transfer your tallies. If you've used our account linking feature on our Discord with your previous name, this process should be even easier for us.</p>

                    <h4>How does Bot Detector identifies potential bots?</h4>
                    <p>We use several different types of machine learning algorithms, and variations within, in order to identify potential botters and legitimate players. We do realise that sometimes we can get it wrong, but thankfully by your feedback, as well as Jagex's, we are able to improve over time!</p>
                    <h4>How accurate is Bot Detector at identifying bots?</h4>
                    <p>We use player feedback to measure the perceived accuracy of our systems in addition to Jagex's confirming bots and real players for us. Lately (as of June 22nd 2021), we have increased our accuracy from 80% to 90% in a short period of time.</p>
                    <h4>How can I contribute to the project?</h4>
                    <p>There are several ways you can contribute to the Bot Detector Project:<br>
                        - Install and use this Plugin: As we increase our number of users, we are able to better train our model and detect bots, thanks to the extra data we can collect.<br>
                        - Donate to our Patreon: All that data has to go somewhere! All money donated through our Patreon goes towards our server upkeep.<br>
                        - Join the Development Team: Come join us on our Discord server and ask an admin for the **New Developer** rank, we'll get you set up!
                        </p>

                    <h4>Do I have to manually predict and flag players for them to be sent to the Bot Detector server?</h4>
                    <p>No, the plugin will grab the data for every player that renders on your screen passively. Manually flagging a player uploads the same data as the passive collection does, but tells us to pay more attention to that data when training our models.</p>

                    <h4>Does this replace manual in-game reporting</h4>
                    <p>No, reporting players in-game sends a ton of data which we cannot collect directly to Jagex and we urge you to continue using that feature whenever you are confident someone is botting! Also, please keep in mind that even if our plugin predicts a player as a bot, it does not mean it is true! Investigate the players yourself before making your decision to report. Please be kind to these players and do not falsely accuse or harrass them based upon a prediction that could be faulty.</p>

                    <h4>I checked myself with the Plugin and my Primary Prediction says I'm a bot! Will I get banned?</h4>
                    <p>No, at least, not by that alone. We take into account not only the Machine Learning's response but also review the names manually prior to sending to Jagex. All we send over are the names of suspected bot accounts and are treated no differently than any other user would whenever submitting leads to tipoff@jagex.com in Jagex's decision process. If you know you didn't bot, you have nothing to worry about.</p>

                    <h4>My Primary Prediction says I'm a Real Player, but it isn't 100% confident and includes several bot labels in the breakdown. What is going on?</h4>
                    <p>The model's ability to evaluate a prediction must take into account a variety of factors. Stats, gear, location, and more are used to determine a predictive score. It is very unlikely, and uncommon, to be rated as a 100% Real Player. Usually if the primary prediction label is at any Real Player percent, the account will not show up in our manual reviews.</p>

                    <h4>Can you ban accounts?</h4>
                    <p>No, as said before, all we do is send over lists of suspicious accounts as you would through tipoff@jagex.com.</p>

                    <h4>Can you unban accounts?</h4>
                    <p>No, for that you will have to file an appeal with http://jgx.game/Ban.</p>

                    <h4>I've seen some of these cool heatmaps, how can I generate more of them?</h4>
                    <p>Generating a heatmap is currently only available to our Patrons. You could ask one to generate a map for you, but we do ask for your consideration in supporting us on our Patreon. If you do, you will have access to an exclusive channel on our Discord server where you can execute the heatmap command at any time. Our Patrons are what make this all possible!</p>

                    <h4>This FAQ did not answer my questions.</h4>
                    <p>Come talk to us on our Discord server, look for the Plugin Issues and Plugin Discussion channels.</p>
                </div>
            </div>
        </div>
        <div class='bottombanner'>
            <img class='bottombanner' contain width='88%' src='../assets/bottom.gif'>
        </div>
        </div>
    </v-container>
</template>


<style scoped>

div.navigationbox {
  background-color: #000000;
  border: 2px solid #382418;
  width: 80%;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

span.navigationbar {
  color: #90c040;
  text-decoration: none;
  font-size: 90%;
  vertical-align: center;
}


div.headerimage {
  position: relative;
  text-align: center;
  padding-top: 10px;
}

img.headerimage1 {
  position: relative;
  right: 10px;
  top: 5px;
  transform: scaleX(-1);
}
img.headerimage2 {
  position: relative;
  left: 10px;
  top: 5px;
}

img.topbanner {
  position: relative;
  z-index: 2;
}

div.topbanner {
  position: relative;
  text-align: center;
}

img.bottombanner {
  position: relative;
  z-index: 2;
}

div.bottombanner {
  position: relative;
  text-align: center;
}

div.background {
    width: 900px;
    margin-right: auto;
    margin-left: auto;
    background-image: url('../assets/background.jpg');
    background-position: center;
    margin-top: -2%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-repeat: repeat-y;
    background-size: 100%;
}

div.main {
    margin-top: -2%;
    padding-top: 2%;
    margin-bottom: -1%;
    width: 85%;
    text-align: center;
    padding-bottom: 100px;
    margin-right: auto;
    margin-left: auto;
    color: #1F1B12;
    background-image: url('../assets/backdrop.gif');
    background-repeat: repeat-y;
    background-position: center;
    background-size: 100%;
}

div.content {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}

hr.break {
  border: solid #6B7B17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin:auto;

}

span.link{
  color: #1b180c;
  font-weight:bold;
}

h2.grouptitle {
    text-align:center;
}

h3.title {
    text-align:left;
}

p.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}

th.header {
    text-align: center;
}

div.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-bottom:1%;
  padding-top:10px;
}
</style>