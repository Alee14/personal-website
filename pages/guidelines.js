import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";

const policyList = "list-disc list-inside"

export default function Guidelines() {
    return (
        <div>
            <Head>
            <title>Guidelines - Andrew Lee</title>
            <meta name="description" content="Andrew's personal website" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="font-hack bg-material-gray text-white px-5 py-6 space-y-5">
				<div id="top"/>
				<div className="text-center items-center justify-center space-y-2">
					<Image src="/Alee.svg" alt="Alee Logo" width={128} height={128} />
					<h1 className="text-4xl font-bold">Andrew Lee Projects Guidelines</h1>
				</div>
				<p>These guidelines are set in place to ensure you have a great time being part of our community/services.</p>
				<div id="main-guidelines">
				<h1 className="text-3xl font-bold">Main Guidelines</h1>
				<p>These are the main guidelines that must be followed in every community/services we own.</p>
				<ul className={policyList}>
					<li>Use common sense.</li>
					<li>No spamming. Any spam will result in an official warning.</li>
					<li>No advertisements/giveaways of any kind, unless asking staff.</li>
					<li>Respect others.</li>
					<li>No backseat moderating (enforcing the rules to other users).</li>
					<li>Refrain from asking for staff.</li>
					<li>Cursing is allowed within reason. However, racial slurs and/or using them to hurt others will result in severe punishment.</li>
					<li>Accusations are not tolerated. Spreading any accusations will result in an investigation from all staff, which may lead to temporary or permanent termination from our services.</li>
					<li>Absolutely no blackmailing, attacking, cyberbullying, or threatening of any members.</li>
					<li>Organized raids are not allowed.</li>
					<li>Only one account per person at a time.</li>
					<li>Any illegal content (i.e. viruses, malware, adware, NSFW, etc) is strictly forbidden.</li>
					<li>Any back talk (i.e, talking negatively on a member from our community/services) is not allowed. This includes exclusive places in the community, not DMs.</li>
					<li>If you encounter someone in this community exchanging or requesting illegal content to you (which includes any NSFW content), contact the staff team immediately and the team will handle it.</li>
				</ul>
				<p>Action will be taken against any users consistently breaking these guidelines.</p>
				</div>
				<div id="alp-policies">
					<h1 className="text-3xl font-bold">Andrew Lee Projects Policies</h1>
					<div id="coppa">
						<h2 className="text-2xl font-bold">COPPA Policy</h2>
						<p>In order to comply with the Children’s Online Privacy Protection Act (COPPA), you must be at least 13 years of age to use these services. You will be banned if found to be under 13 years of age.</p>
					</div>
					<div id="delta">
						<h2 className="text-2xl font-bold">Delta Policy</h2>
						<p>These rules applies when using our Minecraft servers</p>
						<ul className={policyList}>
							<li>Usage of hacked clients (including - but not limited to - Wurst, Wolfram, Sigma, etc.) is strictly prohibited.*</li>
							<li>Griefing is not allowed.*</li>
							<li>Combating is not allowed. Unless the target player wants to combat the other player with permission.*</li>
							<li>Respect everyone.</li>
						</ul>
						<p>If you are found to violate these rules, you may receive a temporary or permanent ban. If you have been banned, and are found playing on an alt, you may be subject to an IP ban.</p>
						<p>* If certain servers allows these actions, then these policies will not apply.</p>
					</div>
				</div>
				<div id="discord-policies">
					<h1 className="text-3xl font-bold">Discord Policies</h1>
					<p>If you are part of our discord server(s), we have set policies that you must follow.</p>
					<div id="logging">
						<h2 className="text-2xl font-bold">Logging</h2>
						<p>The following will be logged and stored by our bots:</p>
						<ul className={policyList}>
							<li>Deleted Messages</li>
							<li>Edited Messages</li>
							<li>Your user ID</li>
							<li>Members joining and leaving</li>
						</ul>
						<p>If you do not agree to the logging of these items, and wish to opt out, you must leave the server.</p>
					</div>
					<div id="nickname">
						<h2 className="text-2xl font-bold">Nickname</h2>
						<p>We enforce this nickname policy to keep a clean, friendly community.</p>
						<p>This system is set in place so that the community is a nice place to be for everyone. When changing your nickname, it must comply with the following guidelines:</p>
						<ul className={policyList}>
							<li>No offensive words</li>
							<li>No symbols</li>
							<li>Nicknames must not be attention-grabbing (i.e. getting to the top of the list by using a symbol)</li>
						</ul>
						<p>Usernames or nickname requests found to be in violation of these guidelines will face repercussions.</p>
					</div>
					<div id="threads">
						<h2 className="text-2xl font-bold">Threads</h2>
						<p>Threads is a new Discord feature which allows you to make subchannels. We have set a policy to not allow to make threads with little to no value, if you made a thread in which has little to no value, it is considered to be spam and we will remove it. If caught doing it continuously, there will be consequences.</p>
					</div>
					<p className="mt-3">We recommend you to follow Discord&apos;s <a href="https://discord.com/terms" className="text-blue-300">Terms of Service</a> and <a href="https://discord.com/guidelines" className="text-blue-300">Community Guidelines</a></p>
				</div>
				<p>Last updated: October 14th, 2022</p>
				<a href="#top" className="text-gray-300">Back to top</a>
			</div>
        </div>
    )
}
