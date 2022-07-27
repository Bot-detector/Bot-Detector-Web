<script setup lang="ts">
import Heading from "@/components/Heading.vue";
import Socials, { SOCIAL } from "@/components/Socials.vue";
import ExternalLink from "@/components/ExternalLink.vue";
</script>

<template>
  <Heading
    title="Frequently Asked Questions"
    imageSource="src/assets/images/GameAssets/questionmarkcake.png"
  />

  <p>
    Have a question about the plugin? We've answered most of them here! If your
    question still has not been answered - feel free to message us on
    <Socials :social="SOCIAL.Discord" />
  </p>

  <hr />
  <h2>Table of contents</h2>
  <ol>
    <li>
      <a href="#gettingStarted">Getting Started</a>
    </li>
    <li>
      <a href="#usingThePlugin">Using the Plugin</a>
    </li>
    <ol>
      <li>
        <a href="#pluginSettings">The Plugin's Settings</a>
      </li>
      <li>
        <a href="#anonymousMode">Anonymous Mode</a>
      </li>
      <li>
        <a href="#understandingThePluginPanel"
          >Understanding the Plugin panel</a
        >
      </li>
      <li>
        <a href="#predictionPanel">the Prediction Panel</a>
      </li>
    </ol>
    <li>
      <a href="#understandingHowThePluginWorks">
        Understanding How the Plugin Works
      </a>
    </li>
    <li>
      <a href="#qAndA"> Questions and Answers </a>
    </li>
    <ol>
      <li>
        <a href="#isThisPluginMalicious">Is this Plugin malicious?</a>
      </li>
      <li>
        <a href="#whyDoIneedRLClientForThis"
          >Why do I need a RuneLite Client/Plugin to capture OSRS names?</a
        >
      </li>
      <li>
        <a href="#aboutIPWarning"
          >When I try to install the Plugin, I get a warning about it needing my
          IP address. What is this about?</a
        >
      </li>
      <li>
        <a href="#somethingDoesntWork"
          >I installed the Plugin, and it works, but it's not tallying my
          uploads? I also can't manually flag players as bots!</a
        >
      </li>
      <li>
        <a href="#ohNoItGotReset"
          >I changed my Runescape Name and my tallies got reset!</a
        >
      </li>
      <li>
        <a href="#howDoesItId"
          >How does Bot Detector identifies potential bots?</a
        >
      </li>
      <li>
        <a href="#howAccurateIsIt"
          >How accurate is Bot Detector at identifying bots?</a
        >
      </li>
      <li>
        <a href="#howCanIContribute">How can I contribute to the project?</a>
      </li>
      <li>
        <a href="#doIHaveToDoManualWork"
          >Do I have to manually predict and flag players for them to be sent to
          the Bot Detector server?</a
        >
      </li>
      <li>
        <a href="#doesItReplaceIGReport"
          >Does this replace manual in-game reporting</a
        >
      </li>
      <li>
        <a href="#itSaysImABotHelp"
          >I checked myself with the Plugin and my Primary Prediction says I'm a
          bot! Will I get banned?</a
        >
      </li>
      <li>
        <a href="#not100WhatsUpWithThat"
          >My Primary Prediction says I'm a Real Player, but it isn't 100%
          confident and includes several bot labels in the breakdown. What is
          going on?</a
        >
      </li>
      <li>
        <a href="#canYouBanAccounts">Can you ban accounts?</a>
      </li>
      <li>
        <a href="#canYouUnbanAccounts">Can you unban accounts?</a>
      </li>
      <li>
        <a href="#allAboutHeatmaps"
          >I've seen some of these cool heatmaps, how can I generate more of
          them?</a
        >
      </li>
      <li>
        <a href="#faqNotAnswer">This FAQ did not answer my questions</a>
      </li>
    </ol>
  </ol>

  <hr />

  <h2 id="gettingStarted">Getting Started</h2>
  <h3>Installing the Plugin</h3>

  <ol>
    <li>Open RuneLite</li>
    <li>
      Navigate to the Configuration wrench on the Top Right of the sidebar.
    </li>
    <li>Click on Plugin Hub at the very bottom.</li>
    <li>Type in Bot Detector in the search bar.</li>
    <li>Click Install</li>
    <li>
      Accept the warning message. (See the FAQ below if you have questions about
      this)
    </li>
    <li>Done !</li>
  </ol>

  <hr />

  <h2 id="usingThePlugin">Using the Plugin</h2>
  <h3 id="pluginSettings">The Plugin's Settings</h3>
  <h4>Upload settings</h4>
  <table>
    <tr>
      <th>Setting Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Anonymous Uploading</td>
      <td>
        When enabled, your username will not be sent with your uploads. You also
        cannot manually flag players.
      </td>
    </tr>
    <tr>
      <td>Send Names Only After Logout</td>
      <td>Recommended for players with low bandwidth.</td>
    </tr>
    <tr>
      <td>Attempt Send on Close</td>
      <td>
        Attempts to upload names when closing Runelite while being logged in.
        Take note that enabling this option may cause the client to take a long
        time to close if our servers are being unresponsive.
      </td>
    </tr>
    <tr>
      <td>Send Names Every <i>x</i> mins</td>
      <td>
        Determines how often the information collected by the plugin is flushed
        to our servers. The maximum rate is once per 5 minutes.
      </td>
    </tr>
  </table>

  <h4>Panel settings</h4>
  <table>
    <tr>
      <th>Setting Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Prediction Autocomplete</td>
      <td>Allows for prediction auto-completion for dialogue box entry.</td>
    </tr>
    <tr>
      <td>Show Feedback Textbox</td>
      <td>
        Adds a textbox to the prediction feedback panel, so you can explain your
        choice in up to 250 characters. Make sure you type your feedback
        *before* you make your choice!
      </td>
    </tr>
    <tr>
      <td>Panel Default Stats Tab</td>
      <td>Sets panel default stats tab when the Plugin turns on.</td>
    </tr>
    <tr>
      <td>Panel Font Size</td>
      <td>Sets the font size of most of the Plugin's Panel elements.</td>
    </tr>
  </table>

  <h4>'Predict' settings</h4>
  <table>
    <tr>
      <th>Setting Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Right-click 'Predict' Players</td>
      <td>
        Allows you to right-click predict players, instead of having to type
        their name in the Plugin's panel manually.
      </td>
    </tr>
    <tr>
      <td>'Predict' on Right-click 'Report'</td>
      <td>
        If you right-click Report someone via Jagex's official in-game report
        system, the player will be automatically predicted in the Plugin's
        Panel.
      </td>
    </tr>
    <tr>
      <td>'Predict' Copy Name to Clipboard</td>
      <td>
        Copies the predicted player's name to your clipboard when right-click
        predicting.
      </td>
    </tr>
    <tr>
      <td>'Predict' Default Color</td>
      <td>
        If set, highlights unflagged / unfeedbacked players' 'Predict' option in
        the given color so that you can easily spot it on the in-game menu.
      </td>
    </tr>
    <tr>
      <td>'Predict' Voted /F lagged Color</td>
      <td>
        If set, highlights flagged / feedbacked players' 'Predict' option in the
        given color so that you can easily spot it on the in-game menu.
      </td>
    </tr>
  </table>

  <h4>Other settings</h4>
  <table>
    <tr>
      <th>Setting Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Enable Chat Status Messages</td>
      <td>
        Inserts chat messages in your chatbox to inform you about your uploads
        being sent.
      </td>
    </tr>
    <tr>
      <td>'!bdstats' Chat Command Detail Level</td>
      <td>
        Enable processing the '!bdstats' command when it appears in the chatbox,
        which will fetch the message author's plugin stats and display them.
        Disable to reduce spam.
      </td>
    </tr>
  </table>

  <h3 id="anonymousMode">Anonymous Mode</h3>
  <p>
    Anonymous Mode is enabled by default, which means your username will not be
    sent with your uploads. However, we cannot tally your uploads, and you will
    not be able to manually flag players.
  </p>

  <h3 id="understandingThePluginPanel">Understanding The Plugin Panel</h3>
  <img
    src="src/assets/images/faqimages/playerstatspanel.png"
    alt="A screenshot of the player stats panel for the plugin"
  />

  <table>
    <tr>
      <th>Label</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Plugin Version</td>
      <td>
        Indicates the Bot Detector Plugin version you are currently running.
      </td>
    </tr>
    <tr>
      <td>Current Uploads</td>
      <td>
        Tallies the number of uploads the plugin has performed for the current
        RuneLite session.
      </td>
    </tr>
    <tr>
      <td>Total Uploads</td>
      <td>Tallies the number of unique Names you've uploaded so far.</td>
    </tr>
    <tr>
      <td>Feedback Sent</td>
      <td>
        Tallies the number of prediction feedbacks you've sent to us so far.
      </td>
    </tr>
    <tr>
      <td>Possible Bans</td>
      <td>
        Tallies the number of unique Names you've uploaded that may have been
        banned. This is usually because a given Name stopped appearing on the
        official Hiscores.
      </td>
    </tr>
    <tr>
      <td>Confirmed Bans</td>
      <td>
        Tallies the number of unique Names you've uploaded confirmed to have
        been banned by Jagex Moderators.
      </td>
    </tr>
    <tr>
      <td>Incorrect Flags</td>
      <td>
        (Manual Tab Only) Tallies the number of unique Names you've flagged as
        bots that ended up being confirmed as real players by Jagex Moderators.
      </td>
    </tr>
    <tr>
      <td>Flag Accuracy</td>
      <td>
        (Manual Tab Only) Indicates your personal accuracy when manually
        flagging, determined by the previous two fields.
      </td>
    </tr>
  </table>

  <p>
    Note for Anonymous Users: Except for Plugin Version and Current Uploads, all
    of these fields are disabled.
  </p>

  <h3 class="title" id="predictionPanel">The Prediction Panel</h3>

  <img
    src="src/assets/images/faqimages/predictpanel.png"
    alt="A screenshot from the plugin where you can see the prediction panel"
  />

  <table>
    <tr>
      <th>Panel</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Primary Prediction</td>
      <td>
        Displays the primary prediction label and confidence for the predicted
        player.
      </td>
    </tr>
    <tr>
      <td>Prediction Breakdown</td>
      <td>
        Displays a breakdown of confidences for other labels our algorithm
        considered. These are not considered in our manual reviews.
      </td>
    </tr>
    <tr>
      <td>Prediction Feedback</td>
      <td>
        Allows the user to send in a feedback for the
        <strong>Primary Prediction</strong> and choose the most appropriate
        available label.
      </td>
    </tr>
    <tr>
      <td>Manual Flagging</td>
      <td>
        Allows the user to upload the most recent sighting for the predicted
        player with an extra flag to tell us to pay more attention to that
        player.
      </td>
    </tr>
  </table>

  <p>
    Note for ⚠️ Anonymous Users ⚠️: The *Manual Flagging* panel is disabled.
  </p>

  <hr />

  <h2 id="understandingHowThePluginWorks">
    Understanding How the Plugin Works
  </h2>

  <p>
    You, as a plugin user, automatically and passively send some information
    about every player you come across in-game to our servers. The information
    sent, all collected at the time of the player spawning on screen, includes:
  </p>

  <ol>
    <li>The display name of the player</li>
    <li>The exact world location of the player</li>
    <li>The world number</li>
    <li>The exact time of the sighting</li>
    <li>The visibly equipped gear of the player</li>
    <li>The GE gear value of the player</li>
  </ol>

  <p>
    We use this information to train one of our many machine learning models to
    identify patterns in accounts.
  </p>

  <p>
    Example: Smithing bots are accounts which have a very high Smithing level,
    wear no gear, and are typically seen in Edgeville and at the Blast Furnace.
  </p>

  <ul>
    <li>We take their levels: High Smithing to Total ratio</li>
    <li>We take their locations: Edgeville & Blast Furnace</li>
    <li>We take their gear: Nothing</li>
    <li>We take their timestamp: Usually on between 16:00 UTC and 22:00 UTC</li>
    <li>
      Then we build a 'pattern' or label for those accounts. In this case, this
      would be labeled as `Smithing_bot`.
    </li>
  </ul>

  <p>
    Note: We usually have to gather data for several weeks or months in order to
    get enough viable training data! That way our estimations are quite close to
    the actual status of the accounts we are attempting to evaluate. After
    building enough accounts into a label, we then test the label on a variety
    of Machine Learning Models, and choose the best one to be used in
    evaluation. Here is an example output below:
  </p>

  <img
    src="src/assets/images/faqimages/mlexample.png"
    alt="A screenshot of data returned by the machine learning algorithm"
  />

  <p>
    Once we are happy with these results, we will then output the labels to you
    whenever you use the Plugin to predict a player. We will then await your
    feedback to see if our label is accurate enough to be used viably. If the
    label scores poorly, it will be pulled from the plugin and be reevaluated.
    Once we are confident a given label performs well, we search our database
    for all accounts matching that label prediction with a very high confidence
    (typically above 90%) and send those names to Jagex for evaluation. Jagex
    then lets us know if they're banned accounts or real players. If they're
    banned, they're marked as confirmed bans. If they're real players, they're
    marked as confirmed players. We then retain and reinforce the model from
    these confirmed ban/player marks.
  </p>

  <hr />

  <h2 id="qAndA">Questions and Answers</h2>

  <h3 id="isThisPluginMalicious">Is this Plugin malicious?</h3>

  <p>
    The Plugin can be installed through RuneLite's
    <ExternalLink to="https://runelite.net/plugin-hub">Plugin Hub</ExternalLink>
    system, which is curated by the RuneLite developers to not allow anything
    that's even mildly suspect. If you have any doubt about the Plugin's inner
    workings, all of its components' source codes are available in this GitHub!
    You may also contact us through our Discord server if you have any questions
    you'd like answered.
  </p>

  <h3 id="whyDoIneedRLClientForThis">
    Why do I need a RuneLite Client/Plugin to capture OSRS names?
  </h3>

  <p>
    RuneLite's APIs allow us to easily collect nearby players' location, gear
    and gear cost information, all of which prove to be viable in detecting
    potential bots. While we could simply scrape the entirety of the Runescape
    Hiscores for "bot-like" accounts, it would be quite inefficient. The
    combined information of active player names along with the aforementioned
    collected data gives our system much more power, especially for
    differentiating between bots and alt accounts.
  </p>

  <h3 id="aboutIPWarning">
    When I try to install the Plugin, I get a warning about it needing my IP
    address. What is this about?
  </h3>

  <p>
    That is simply how the Internet works. As the Plugin needs to connect to our
    servers to send and receive data, your IP comes along for the ride. We do
    not log your IP address and <strong>Anonymous Mode</strong> is enabled by
    default, which means that we will not receive your Runescape Name with the
    data you send. You may however turn off the option yourself in the Plugin's
    settings to access extra features.
  </p>

  <h3 id="somethingDoesntWork">
    I installed the Plugin, and it works, but it's not tallying my uploads? I
    also can't manually flag players as bots!
  </h3>

  <p>
    Anonymous Mode is enabled by default. If it is enabled, we cannot associate
    your uploads with your Runescape Name. If you wish to tally your uploads,
    you'll need to disable Anonymous Mode in the Plugin's settings. In addition,
    we've disabled manual flagging for Anonymous users.
  </p>

  <h3 id="ohNoItGotReset">
    I changed my Runescape Name and my tallies got reset!
  </h3>

  <p>
    The only way we can easily attribute uploads is through the sender's
    Runescape Name. If you have a way of confirming to us your previous name,
    come talk to us on our Discord server where we may be able to transfer your
    tallies. If you've used our account linking feature on our Discord with your
    previous name, this process should be even easier for us.
  </p>

  <h3 id="howDoesItId">How does Bot Detector identifies potential bots?</h3>

  <p>
    We use several different types of machine learning algorithms, and
    variations within, in order to identify potential botters and legitimate
    players. We do realise that sometimes we can get it wrong, but thankfully by
    your feedback, as well as Jagex's, we are able to improve over time!
  </p>

  <h3 id="howAccurateIsIt">
    How accurate is Bot Detector at identifying bots?
  </h3>

  <p>
    We use player feedback to measure the perceived accuracy of our systems in
    addition to Jagex's confirming bots and real players for us. Lately (as of
    June 22nd 2021), we have increased our accuracy from 80% to 90% in a short
    period of time.
  </p>

  <h3 id="howCanIContribute">How can I contribute to the project?</h3>

  <p>There are several ways you can contribute to the Bot Detector Project:</p>

  <ul>
    <li>
      Install and use this Plugin: As we increase our number of users, we are
      able to better train our model and detect bots, thanks to the extra data
      we can collect.
    </li>
    <li>
      Donate to our Patreon: All that data has to go somewhere! All money
      donated through our Patreon goes towards our server upkeep.
    </li>
    <li>
      Join the Development Team: Come join us on our Discord server and ask an
      admin for the <strong>New Developer</strong> rank, we'll get you set up!
    </li>
  </ul>

  <h3 id="doIHaveToDoManualWork">
    Do I have to manually predict and flag players for them to be sent to the
    Bot Detector server?
  </h3>

  <p>
    No, the plugin will grab the data for every player that renders on your
    screen passively. Manually flagging a player uploads the same data as the
    passive collection does, but tells us to pay more attention to that data
    when training our models.
  </p>

  <h3 id="doesItReplaceIGReport">
    Does this replace manual in-game reporting?
  </h3>

  <p>
    No, reporting players in-game sends a ton of data which we cannot collect
    directly to Jagex and we urge you to continue using that feature whenever
    you are confident someone is botting! Also, please keep in mind that even if
    our plugin predicts a player as a bot, it does not mean it is true!
    Investigate the players yourself before making your decision to report.
    Please be kind to these players and do not falsely accuse or harrass them
    based upon a prediction that could be faulty.
  </p>

  <h3 id="itSaysImABotHelp">
    I checked myself with the Plugin and my Primary Prediction says I'm a bot!
    Will I get banned?
  </h3>

  <p>
    No, at least, not by that alone. We take into account not only the Machine
    Learning's response but also review the names manually prior to sending to
    Jagex. All we send over are the names of suspected bot accounts and are
    treated no differently than any other user would whenever submitting leads
    to <a href="mailto:tipoff@jagex.com">tipoff@jagex.com</a> in Jagex's
    decision process. If you know you didn't bot, you have nothing to worry
    about.
  </p>

  <h3 id="not100WhatsUpWithThat">
    My Primary Prediction says I'm a Real Player, but it isn't 100% confident
    and includes several bot labels in the breakdown. What is going on?
  </h3>

  <p>
    The model's ability to evaluate a prediction must take into account a
    variety of factors. Stats, gear, location, and more are used to determine a
    predictive score. It is very unlikely, and uncommon, to be rated as a 100%
    Real Player. Usually if the primary prediction label is at any Real Player
    percent, the account will not show up in our manual reviews.
  </p>

  <h3 id="canYouBanAccounts">Can you ban accounts?</h3>

  <p>
    No, as said before, all we do is send over lists of suspicious accounts as
    you would through <a href="mailto:tipoff@jagex.com">tipoff@jagex.com</a>.
  </p>

  <h3 id="canYouUnbanAccounts">Can you unban accounts?</h3>

  <p>
    No, for that you will have to file an appeal with
    <ExternalLink to="https://jgx.game/Ban">https://jgx.game/Ban</ExternalLink>.
  </p>

  <h3 id="allAboutHeatmaps">
    I've seen some of these cool heatmaps, how can I generate more of them?
  </h3>

  <p>
    Generating a heatmap is currently only available to our Patrons. You could
    ask one to generate a map for you, but we do ask for your consideration in
    supporting us on our Patreon. If you do, you will have access to an
    exclusive channel on our Discord server where you can execute the heatmap
    command at any time. Our Patrons are what make this all possible!
  </p>

  <h3 id="faqNotAnswer">This FAQ did not answer my questions.</h3>
  <p>
    Come talk to us on our Discord server, look for the Plugin Issues and Plugin
    Discussion channels.
  </p>
</template>

<style scoped lang="scss">
img {
  display: block;
  max-width: 100%;
}

table {
  tr {
    th,
    td {
      padding: 0.5rem;
      border: solid 1px rgba($color: #000000, $alpha: 0.2);
    }
  }
}

ol {
  ol {
    list-style-type: lower-roman;
  }
}
</style>
