import Meta from '../components/meta'
import Navigation from "../components/nav";
import Image from "next/image";

const policyList = "list-disc list-inside"

export default function Guidelines() {
    return (
        <div className="font-hack bg-material-gray text-white">
            <Meta title="Guidelines" description="Guidelines for Andrew Lee Projects Communities/Services"/>
			<Navigation />
            <div className="px-5 py-6 space-y-5 flex flex-col">
				<div id="top"/>
				<div className="flex flex-col text-center justify-center items-center space-y-2">
					<Image src="/Alee.png" alt="Alee Logo" className="rounded-full" width={150} height={150} />
					<h1 className="text-4xl font-bold">Andrew Lee Projects Guidelines</h1>
				</div>
				<p>These guidelines are set in place to ensure you have a great time being part of our community/services.</p>
				<div id="main-guidelines" className="space-y-2">
				<h1 className="text-3xl font-bold">General Guidelines</h1>
				<p>These are the main guidelines that must be followed in every community/services we own.</p>
				<ul className={policyList}>
					<li>No spamming. Any spam will result in an official warning.</li>
					<li>No advertisements/giveaways of any kind, unless asking staff.</li>
					<li>Do not attempt to enforce the rules on other users. Only staff members have the authority to do so.</li>
					<li>Refrain from asking for staff.</li>
					<li>Cursing is allowed within reason, but using racial slurs or using them to harm others will result in severe punishment.</li>
					<li>Accusations are not tolerated. Making accusations without evidence will result in an investigation by the staff and may lead to temporary or permanent removal from our services.</li>
					<li>Do not engage in blackmail, attacks, cyberbullying, or threats against any members.</li>
					<li>Organized raids are not allowed. We have measures in place to deal with these situations.</li>
					<li>Only one account per person at a time.</li>
					<li>Any content that does not fit here (i.e. viruses, malware, adware, NSFW, illegal content, etc) is strictly forbidden.</li>
					<li>Do not speak negatively about other members, including in private messages.</li>
					<li>If you encounter someone requesting, sending unsolicited, or sharing illegal or NSFW content, or behaving in a way that is disrespectful or harassing, please report the behavior to the staff immediately.</li>
				</ul>
				<p>By being part of here, you must respect all members, regardless of their gender, race, sexual orientation, beliefs, or opinions. Disrespect will not be tolerated and will result in staff action.</p>
				<p>Use common sense and good judgement while participating in our community/services.</p>
				<p>Staff members reserve the right to make impromptu decisions as necessary to maintain a peaceful environment.</p>
				<p>Action will be taken against any users consistently breaking these guidelines. If there is content that is extremely illegal or if someone is threatening or harming another person in real life, it is our responsibility to report it to the appropriate authorities.</p>
				</div>
				<div id="alp-policies">
					<h1 className="text-3xl font-bold">Andrew Lee Projects Policies</h1>
					<div id="coppa">
						<h2 className="text-2xl font-bold">COPPA Policy</h2>
						<p>In order to comply with the Children&apos;s Online Privacy Protection Act (COPPA), you must be at least 13 years of age to use these services. You will be kicked if found to be under 13 years of age. A ban will be issued if you do not comply with the staff.</p>
					</div>
					<div id="delta">
						<h2 className="text-2xl font-bold">Delta Policy</h2>
						<p>These rules applies when using our Minecraft servers</p>
						<ul className={policyList}>
							<li>Usage of hacked clients (including - but not limited to - Wurst, Wolfram, Sigma, etc.) is strictly prohibited.*</li>
							<li>Griefing is not allowed.*</li>
							<li>Unwarranted combating is not allowed unless both parties have given permission.*</li>
							<li>Our general guidelines applies here as well.</li>
						</ul>
						<p>Violation of these rules may result in a temporary or permanent ban. If you are banned and found to be playing on an alt, you may also face an IP ban.</p>
						<p>* These policies may not apply to servers (e.g: Anarchy) that allow these actions.</p>
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
						<p>If you do not agree to the logging of these actions and wish to opt out, you must leave the server.</p>
					</div>
					<div id="nickname">
						<h2 className="text-2xl font-bold">Nickname</h2>
						<p>We enforce this nickname policy to keep a clean, friendly community.</p>
						<p>This system is set in place so that the community is a nice place to be for everyone. When changing your nickname, it must comply with the following guidelines:</p>
						<ul className={policyList}>
							<li>No offensive words</li>
							<li>No symbols</li>
							<li>Do not change your nickname frequently</li>
							<li>Nicknames should not be attention-seeking (e.g. using a special characters to appear at the top of the list)</li>
						</ul>
						<p>Users found to be in violation of these guidelines may have their nickname changed or lose the ability to change their nickname at the discretion of the staff.</p>
					</div>
					<div id="threads">
						<h2 className="text-2xl font-bold">Threads/Posts</h2>
						<p>Threads/Posts is a new feature on Discord that allows users to create subchannels. To ensure that our community is not cluttered with low-value content, we have a policy against creating threads/posts with little to no value. If you create a thread/post that falls under this category, it will be considered spam and will be removed. If you are found to be repeatedly creating low-value threads/posts, you may lose the privilege to create them.</p>
					</div>
					<p className="mt-3">We recommend you to follow Discord&apos;s <a href="https://discord.com/terms" className="link">Terms of Service</a> and <a href="https://discord.com/guidelines" className="link">Community Guidelines</a></p>
				</div>
				<p className="font-bold">Last updated: December 16th, 2022</p>
				<a href="#top" className="link">Back to top</a>
			</div>
        </div>
    )
}
