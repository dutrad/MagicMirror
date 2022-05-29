/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-AirQuality',
			position: 'top_center', // you may choose any location
			header: 'Air', //choose a header if you like
			config: {
				location: 'portugal/fundao/fundao' // the location to check the index for
			}
		},
		{
			module: "MMM-OpenWeatherForecast",
			position: "top_right",
			header: "Forecast",
			config: {
				apikey: "94537367cabe7e7250ae54974a256cfa", //only string here
				latitude: 40.1380,            //number works here
				longitude: -7.5011,          //so does a string
				showFeelsLikeTemp: true,
				useAnimatedIcons: false,
			}
		},
		{
			module: 'MMM-GmailFeed',
			position: 'bottom_left',
			config: {
				username: 'dutrad.vinicius@gmail.com',
				password: 'sxvniyjuumhqunmb',
				updateInterval: 60000,
				maxEmails: 5,
				maxSubjectLength: 38,
				maxFromLength: 15,
				playSound: true,
				autoHide: true,
				displayMode: "table",
			}
		},
		{
			module: "MMM-PiTemp",
			position: "bottom_left",
			config: {}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Atletico MG - Superesportes",
						url: "https://www.mg.superesportes.com.br/rss/noticias/futebol/atletico-mg/rss.xml"
					},
					{
						title: "BBC",
						url: "https://www.em.com.br/rss/noticia/internacional/bbc/rss.xml"
					},
					{
						title: "G1 - Brasil",
						url: "http://g1.globo.com/dynamo/brasil/rss2.xml"
					},
					{
						title: "G1 - Economia",
						url: "http://g1.globo.com/dynamo/economia/rss2.xml"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: false,
				broadcastNewsUpdates: false,
				ignoreOlderThan: 43400000,
				animationSpeed: 5000
			}
		},
		/*{
			module: 'MMM-CalendarExt2',
			position: 'middle_left',
			config: {
				defaultSet: {
					view: {},
					scene: {},
					scanInterval: 1000 * 60 * 5,
					calendar: {
						beforeDays: 5,
						afterDays: 30
					},
				},
				calendars: [
					{
						url: 'https://calendar.google.com/calendar/u/0?cid=ZHV0cmFkLnZpbmljaXVzQGdtYWlsLmNvbQ',
						name: 'Vinicius',
						icon: 'emojione-v1:family-man-woman-boy-boy'
					},
				],
				views: [
					{
						name: 'days1',
						mode: 'daily',
						type: "row",
						slotCount: 3,
						hideOverflow: false,
						filterPassedEvent: true,
						position: 'middle_center',
						timeFormat: "h:mm A",
						slotTitleFormat: "ddd",
						slotSubTitleFormat: "MMM Do",
					},
					{
						name: 'days2',
						mode: 'daily',
						type: "row",
						slotCount: 3,
						hideOverflow: false,
						slotMaxHeight: "140px",
						filterPassedEvent: true,
						fromNow: 3,
						position: 'lower_third',
						timeFormat: "h:mm A",
						slotTitleFormat: "ddd",
						slotSubTitleFormat: "MMM Do",
					},
					{
						name: 'days3',
						mode: 'daily',
						type: "row",
						slotCount: 3,
						hideOverflow: false,
						slotMaxHeight: "100px",
						filterPassedEvent: true,
						fromNow: 6,
						position: 'lower_third',
						timeFormat: "h:mm A",
						slotTitleFormat: "ddd",
						slotSubTitleFormat: "MMM Do",
					},
				],
				scenes: [
					{
						name: "DEFAULT",
					},
				],
			},

		},*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
