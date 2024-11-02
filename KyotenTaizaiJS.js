const KYOTEN_RED = 0;
const KYOTEN_BLUE = 1;
const KYOTEN_YELLOW = 2;
const KYOTEN_GREEN = 3;
const KYOTEN_PURPLE = 4;
const KYOTEN_WHITE = 5;
const KYOTEN_WHITEGOLD = 6;
const KYOTEN_WHITESILVER = 7;
const KYOTEN_WHITECOPPER = 8;
const KYOTEN_BLACK = 9;
const KYOTEN_BLACKGOLD = 10;
const KYOTEN_BLACKSILVER = 11;
const KYOTEN_BLACKCOPPER = 12;
const KYOTEN_NIJI = 13;
const KYOTEN_TOKIMODORI = 14;
const KYOTEN_SAISEI = 15;
const KYOTEN_OUGON = 16;

const ENEMYTYPE_MIN = 1;
const ENEMYTYPE_MAX = 12;

const CONSTRUCT_COST_OF_ONE_COLOR_KYOTEN = 5000;
const CONSTRUCT_COST_OF_NIJI_KYOTEN = 8000;
const CONSTRUCT_COST_OF_TOKIMODORI = 7000;
const CONSTRUCT_COST_OF_SAISEI = 7000;
const CONSTRUCT_COST_OF_OUGON = 7000;

const MIRI_SECONDS_OF_ONE_DAY = 8640000
 
//拠点同士の最小間隔(メートル)
const KYOTEN_MIN_INTERVAL = 200;
//何コインで1単位の鈴アイテムの強化ができるか
const KYOKA_COIN_UNIT = 10;
//一ステップにかかる秒数
const ONE_STEP_SECOND = 60;
//何ミリ秒を一分としてカウントするか
const ONE_MINITE_SECOND = 60000;
//何ステップで経験値がもらえるか
const GET_POINT_STEP_COUNT = 1;
//敵レベルごとのステータス最小・最大値
const MIN_STS_VOL_LEVEL1 = 1
const MAX_STS_VOL_LEVEL1 = 100
const MIN_STS_VOL_LEVEL2 = 100
const MAX_STS_VOL_LEVEL2 = 1000
const MIN_STS_VOL_LEVEL3 = 1000
const MAX_STS_VOL_LEVEL3 = 10000
const MIN_STS_VOL_LEVEL4 = 10000
const MAX_STS_VOL_LEVEL4 = 100000

const MIN_EXP_VOL_LEVEL1 = 1
const MAX_EXP_VOL_LEVEL1 = 10
const MIN_EXP_VOL_LEVEL2 = 10
const MAX_EXP_VOL_LEVEL2 = 50
const MIN_EXP_VOL_LEVEL3 = 50
const MAX_EXP_VOL_LEVEL3 = 100
const MIN_EXP_VOL_LEVEL4 = 100
const MAX_EXP_VOL_LEVEL4 = 200

const MIN_COIN_VOL_LEVEL1 = 1
const MAX_COIN_VOL_LEVEL1 = 10
const MIN_COIN_VOL_LEVEL2 = 10
const MAX_COIN_VOL_LEVEL2 = 20
const MIN_COIN_VOL_LEVEL3 = 20
const MAX_COIN_VOL_LEVEL3 = 30
const MIN_COIN_VOL_LEVEL4 = 30
const MAX_COIN_VOL_LEVEL4 = 40


//勝負の状態、継続中、勝ち、負け
const FIGHT_RESULT_CONTINUE = 0
const FIGHT_RESULT_WIN = 1
const FIGHT_RESULT_LOSE = 2

//ダメージの乱数範囲
const DM_RND_VOL_MIN = 1
const DM_RND_VOL_MAX = 10

//鈴一種類につき何パーセント確率を変えるか
const UP_PERCENTAGE_UNIT = 10
const DOWN_PERCENTAGE_UNIT = 10

const STS_UP = 0
const STS_DOWN = 1

const SUZU_POINT_NOT_CONSUME = 0
const SUZU_POINT_CONSUME = 1

const YOBI_SUZU = 0
const OI_SUZU = 1

const KYUSOKU_PERCENTAGE_MIN = 10
const KYUSOKU_PERCENTAGE_MAX = 90

const ATTACK_TURN = 0
const KYUSOKU_TURN = 1

g_PrevCountStart = 0;
g_PrevStepTime = new Date();
g_PassedStep = 0;

var g_CurrentYMDDate = new Date();


g_KyotenColorNames = ["赤","青","黄","緑","紫","白","白金","白銀","白銅","黒","黒金","黒銀","黒銅","虹",
"時戻りの砂漠","再生の森","黄金の泉"]

g_YobiSuzuSettingElemIdList = 
["YobiSuzuSetting_RedSuzu",
"YobiSuzuSetting_BlueSuzu",
"YobiSuzuSetting_YellowSuzu",
"YobiSuzuSetting_GreenSuzu",
"YobiSuzuSetting_PurpleSuzu",
"YobiSuzuSetting_WhiteSuzu",
"YobiSuzuSetting_WhiteGoldSuzu",
"YobiSuzuSetting_WhiteSilverSuzu",
"YobiSuzuSetting_WhiteCopperSuzu",
"YobiSuzuSetting_BlackSuzu",
"YobiSuzuSetting_BlackGoldSuzu",
"YobiSuzuSetting_BlackSilverSuzu",
"YobiSuzuSetting_BlackCopperSuzu"]

g_YobiSuzuPowerStsElemIdList =
["RedYobiSuzuColorPowerSts",
"BlueYobiSuzuColorPowerSts",
"YellowYobiSuzuColorPowerSts",
"GreenYobiSuzuColorPowerSts",
"PurpleYobiSuzuColorPowerSts",
"WhiteYobiSuzuColorPowerSts",
"WhiteGoldYobiSuzuColorPowerSts",
"WhiteSilverYobiSuzuColorPowerSts",
"WhiteCopperYobiSuzuColorPowerSts",
"BlackYobiSuzuColorPowerSts",
"BlackGoldYobiSuzuColorPowerSts",
"BlackSilverYobiSuzuColorPowerSts",
"BlackCopperYobiSuzuColorPowerSts"
]

g_OiSuzuPowerStsElemIdList =
["RedOiSuzuColorPowerSts",
"BlueOiSuzuColorPowerSts",
"YellowOiSuzuColorPowerSts",
"GreenOiSuzuColorPowerSts",
"PurpleOiSuzuColorPowerSts",
"WhiteOiSuzuColorPowerSts",
"WhiteGoldOiSuzuColorPowerSts",
"WhiteSilverOiSuzuColorPowerSts",
"WhiteCopperOiSuzuColorPowerSts",
"BlackOiSuzuColorPowerSts",
"BlackGoldOiSuzuColorPowerSts",
"BlackSilverOiSuzuColorPowerSts",
"BlackCopperOiSuzuColorPowerSts"
]

//現在の状況（なし、拠点滞在、勝負）
const MODE_NOTHING = 0
const MODE_KYOTEN_TAIZAI = 1
const MODE_FIGHT = 2

g_ModeJPStr = ["何もしない","拠点滞在","勝負"]
g_StepExecuteFlg = false;
g_StartedFightFlg = false;


//GoogleAPIキー
var GoogleAPIKey = ''
var g_Map;
var deviceType;
var g_KyotenTuikaFlg = false;
var g_KyotenSakujoFlg = false;
var g_CurrentMarker = null;
var g_CurrentPositionMarker = null;
var g_InfoWindowList = [];
var g_AdvanceOneStepLog = "";
var g_KyotenMarkerList = [];
var g_CurrentDelCandidateMarker = null;

//グーグルマップのMarkerオブジェクトのマップ
var MarkerMap = new Array();


class Enemy {

	EStsUpRate = [10,10,10,10,
				  10,10,10,10,
				  10,10,10,10]
				  
	EStsDnRate = [10,10,10,10,
				  10,10,10,10,
				  10,10,10,10]
	EStsUpDivValList;
	EStsDnDivValList;
	enemyImgName = ""
	CurrentHp = 0
	
    //攻撃力
    RedSts = 0
    //防御力
    BlueSts = 0
    //hp
    YellowSts = 0
    //回避率
    GreenSts = 0
    //命中率
    PurpleSts = 0
    //自分のステータス上昇発生率
    WhiteSts = 0
    //自分のステータス上昇時の上昇数値
    WhiteGoldSts = 0
    //相手がステータス低下を発生したときの防御数値
    WhiteSilverSts = 0
    //相手の起こすステータス低下発生に対する抵抗率
    WhiteCopperSts = 0
    //相手のステータス低下発生率
    BlackSts = 0
    //相手のステータス低下発生時の低下数値
    BlackGoldSts = 0
    //相手がステータス上昇を発生させたときの防御数値
    BlackSilverSts = 0
    //相手の起こすステータス上昇に対する抵抗率
    BlackCopperSts = 0
    
    HavingCoin = 0
    HavingExp = 0
    
    //戦闘用一時ステータス    
    //攻撃力
	Fight_RedSts;
    //防御力
	Fight_BlueSts;
    //hp
	Fight_YellowSts;
    //回避率
	Fight_GreenSts;
    //命中率
	Fight_PurpleSts;
    //自分のステータス上昇発生率
	Fight_WhiteSts;
    //自分のステータス上昇時の上昇数値
	Fight_WhiteGoldSts;
    //相手がステータス低下を発生したときの防御数値
	Fight_WhiteSilverSts;
    //相手の起こすステータス低下発生に対する抵抗率
	Fight_WhiteCopperSts;
    //相手のステータス低下発生率
	Fight_BlackSts;
    //相手のステータス低下発生時の低下数値
	Fight_BlackGoldSts;
    //相手がステータス上昇を発生させたときの防御数値
	Fight_BlackSilverSts;
    //相手の起こすステータス上昇に対する抵抗率
    Fight_BlackCopperSts;
    
    EnemyType;
    
    //休息確率
    KyusokuPercentage = 50;
    
  
}
class User {

	UStsUpRate = [10,10,10,10,
				  10,10,10,10,
				  10,10,10,10]
				  
	UStsDnRate = [60,60,60,60,
				  60,60,60,60,
				  60,60,60,60]
	UStsUpDivValList;
	UStsDnDivValList;

    //攻撃力
    RedSts = 1
    //防御力
    BlueSts = 1
    //hp
    YellowSts = 1
    //回避率
    GreenSts = 1
    //命中率
    PurpleSts = 1
    //自分のステータス上昇発生率
    WhiteSts = 1
    //自分のステータス上昇時の上昇数値
    WhiteGoldSts = 1
    //相手がステータス低下を発生したときの防御数値
    WhiteSilverSts = 1
    //相手の起こすステータス低下発生に対する抵抗率
    WhiteCopperSts = 1
    //相手のステータス低下発生率
    BlackSts = 1
    //相手のステータス低下発生時の低下数値
    BlackGoldSts = 1
    //相手がステータス上昇を発生させたときの防御数値
    BlackSilverSts = 1
    //相手の起こすステータス上昇に対する抵抗率
    BlackCopperSts = 1
    
    RedStsExp = 0
    BlueStsExp = 0
    YellowStsExp = 0
    GreenStsExp = 0
    PurpleStsExp = 0
    WhiteStsExp = 0
    WhiteGoldStsExp = 0
    WhiteSilverStsExp = 0
    WhiteCopperStsExp = 0
    BlackStsExp = 0
    BlackGoldStsExp = 0
    BlackSilverStsExp = 0
    BlackCopperStsExp = 0
    
    //拠点ID
    KyotenNames = []
    KyotenTypes = []
    KyotenLats = []
    KyotenLngs = []
    KyotenCount = 0
    
    HavingYobiSuzuColor = [0,0,0,0,
                           0,0,0,0,
                           0,0,0,0,
                           0]
                           
    HavingYobiSuzuPower = [0,0,0,0,
    					   0,0,0,0,
    					   0,0,0,0,
    					   0]
    					   
    HavingOiSuzuColor = [0,0,0,0,
    					 0,0,0,0,
    					 0,0,0,0,
    					 0]
    					 
    HavingOiSuzuPower = [0,0,0,0,
    					 0,0,0,0,
    					 0,0,0,0,
    					 0]
    
    HavingCoin = 1000
    
    HavingTimeSand = 0    
    TimeSandDownStsType = 0
    TimeSandUpStsType = 0
    
    FightEnemyLevel = 1
    WinEnemyCount1 = [0,0,0,0,0,0,0,0,0,0,0,0]
    WinEnemyCount2 = [0,0,0,0,0,0,0,0,0,0,0,0]
    WinEnemyCount3 = [0,0,0,0,0,0,0,0,0,0,0,0]
    WinEnemyCount4 = [0,0,0,0,0,0,0,0,0,0,0,0]
    
    CurrentMode = MODE_NOTHING
	CurrentKyotenType = ""
	
	name1 = 'USER1';
	CurrentHp;
	lat1;
	lng1;
	KyotenMarkerList=[];
	KyotenMarkerMessages=[];

	//最後にゲームをプレイした日	
	LastPlayedDate = new Date();
	TodayEarnedTotalExp = 0;
	TodayEarnedTotalCoin = 0;
	TodayTotalKyotenTaizaiMinite = 0;
	TodayEarnedTotalTimeSand = 0;
	
	

	//コイン0で拠点を作成した最後の日
	LastCreateDate = 0;
	LastCreateMonth = 0;
	
    //戦闘用一時ステータス    
    //攻撃力
	Fight_RedSts;
    //防御力
	Fight_BlueSts;
    //hp
	Fight_YellowSts;
    //回避率
	Fight_GreenSts;
    //命中率
	Fight_PurpleSts;
    //自分のステータス上昇発生率
	Fight_WhiteSts;
    //自分のステータス上昇時の上昇数値
	Fight_WhiteGoldSts;
    //相手がステータス低下を発生したときの防御数値
	Fight_WhiteSilverSts;
    //相手の起こすステータス低下発生に対する抵抗率
	Fight_WhiteCopperSts;
    //相手のステータス低下発生率
	Fight_BlackSts;
    //相手のステータス低下発生時の低下数値
	Fight_BlackGoldSts;
    //相手がステータス上昇を発生させたときの防御数値
	Fight_BlackSilverSts;
    //相手の起こすステータス上昇に対する抵抗率
    Fight_BlackCopperSts;
    
    //休息確率
    KyusokuPercentage = 50;
    
  
}


var textOfFile1;

//Form要素を取得する
var form = document.getElementById("myform1");
var file = document.getElementById("myfile1");
//ファイルが読み込まれた時の処理
file.addEventListener('change', function(e) {
  
  //ここにファイル取得処理を書く
  result2 = e.target.files[0];
  
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText( result2 );
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {
    
        //ファイルの中身をtextarea内に表示する
        textOfFile1 = reader.result;    
    })

})


function GetConstructCostCoinOfKyoten(colorIdx){
	if(colorIdx >= KYOTEN_RED && colorIdx < KYOTEN_NIJI){
		return CONSTRUCT_COST_OF_ONE_COLOR_KYOTEN
	}else if(colorIdx == KYOTEN_NIJI){
		return CONSTRUCT_COST_OF_NIJI_KYOTEN
	}else if(colorIdx == KYOTEN_TOKIMODORI){
		return CONSTRUCT_COST_OF_TOKIMODORI
	}else if(colorIdx == KYOTEN_SAISEI){
		return CONSTRUCT_COST_OF_SAISEI
	}else if(colorIdx == KYOTEN_OUGON){
		return CONSTRUCT_COST_OF_OUGON
	}
}

//ユーザの位置情報を更新する
function UpdateMyUserLatLng(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function ( position )
			{
				// 取得したデータの整理
				var data1 = position.coords;

				// データの整理
				MyUser.lat1 = data1.latitude;
				MyUser.lng1 = data1.longitude;
				
				g_Map.setCenter(new google.maps.LatLng(MyUser.lat1, MyUser.lng1));
				
				SetCurrentLatLngMarker(MyUser)
				
			},
			function ( error )
			{
				alert("現在位置をセットできませんでした");
			},
			//オプション
			{
				"enableHighAccuracy": false,
				"timeout": 8000,
				"maximumAge": 2000
			}
		);
	}

}
function AddCurrentExpVol(colorIdx, vol){
	if(colorIdx == KYOTEN_RED){
		MyUser.RedStsExp += vol;
	}else if(colorIdx == KYOTEN_BLUE){
		MyUser.BlueStsExp += vol;
	}else if(colorIdx == KYOTEN_YELLOW){
		MyUser.YellowStsExp += vol;
	}else if(colorIdx == KYOTEN_GREEN){
		MyUser.GreenStsExp += vol;
	}else if(colorIdx == KYOTEN_PURPLE){
		MyUser.PurpleStsExp += vol;
	}else if(colorIdx == KYOTEN_WHITE){
		MyUser.WhiteStsExp += vol;
	}else if(colorIdx == KYOTEN_WHITEGOLD){
		MyUser.WhiteGoldStsExp += vol;
	}else if(colorIdx == KYOTEN_WHITESILVER){
		MyUser.WhiteSilverStsExp += vol;
	}else if(colorIdx == KYOTEN_WHITECOPPER){
		MyUser.WhiteCopperStsExp += vol;
	}else if(colorIdx == KYOTEN_BLACK){
		MyUser.BlackStsExp += vol;
	}else if(colorIdx == KYOTEN_BLACKGOLD){
		MyUser.BlackGoldStsExp += vol;
	}else if(colorIdx == KYOTEN_BLACKSILVER){
		MyUser.BlackSilverStsExp += vol;
	}else if(colorIdx == KYOTEN_BLACKCOPPER){
		MyUser.BlackCopperStsExp += vol;
	}
}
function GetCurrentExpVol(colorIdx){
	if(colorIdx == KYOTEN_RED){
		return MyUser.RedStsExp;
	}else if(colorIdx == KYOTEN_BLUE){
		return MyUser.BlueStsExp;
	}else if(colorIdx == KYOTEN_YELLOW){
		return MyUser.YellowStsExp;
	}else if(colorIdx == KYOTEN_GREEN){
		return MyUser.GreenStsExp;
	}else if(colorIdx == KYOTEN_PURPLE){
		return MyUser.PurpleStsExp;
	}else if(colorIdx == KYOTEN_WHITE){
		return MyUser.WhiteStsExp;
	}else if(colorIdx == KYOTEN_WHITEGOLD){
		return MyUser.WhiteGoldStsExp;
	}else if(colorIdx == KYOTEN_WHITESILVER){
		return MyUser.WhiteSilverStsExp;
	}else if(colorIdx == KYOTEN_WHITECOPPER){
		return MyUser.WhiteCopperStsExp;
	}else if(colorIdx == KYOTEN_BLACK){
		return MyUser.BlackStsExp;
	}else if(colorIdx == KYOTEN_BLACKGOLD){
		return MyUser.BlackGoldStsExp;
	}else if(colorIdx == KYOTEN_BLACKSILVER){
		return MyUser.BlackSilverStsExp;
	}else if(colorIdx == KYOTEN_BLACKCOPPER){
		return MyUser.BlackCopperStsExp
	}

}

function GetCurrentStsVol(colorIdx){
	if(colorIdx == KYOTEN_RED){
		return MyUser.RedSts;
	}else if(colorIdx == KYOTEN_BLUE){
		return MyUser.BlueSts;
	}else if(colorIdx == KYOTEN_YELLOW){
		return MyUser.YellowSts;
	}else if(colorIdx == KYOTEN_GREEN){
		return MyUser.GreenSts;
	}else if(colorIdx == KYOTEN_PURPLE){
		return MyUser.PurpleSts;
	}else if(colorIdx == KYOTEN_WHITE){
		return MyUser.WhiteSts;
	}else if(colorIdx == KYOTEN_WHITEGOLD){
		return MyUser.WhiteGoldSts;
	}else if(colorIdx == KYOTEN_WHITESILVER){
		return MyUser.WhiteSilverSts;
	}else if(colorIdx == KYOTEN_WHITECOPPER){
		return MyUser.WhiteCopperSts;
	}else if(colorIdx == KYOTEN_BLACK){
		return MyUser.BlackSts;
	}else if(colorIdx == KYOTEN_BLACKGOLD){
		return MyUser.BlackGoldSts;
	}else if(colorIdx == KYOTEN_BLACKSILVER){
		return MyUser.BlackSilverSts;
	}else if(colorIdx == KYOTEN_BLACKCOPPER){
		return MyUser.BlackCopperSts;
	}
}

function AddCurrentStsVol(colorIdx, vol){
	if(colorIdx == KYOTEN_RED){
		MyUser.RedSts += vol;
	}else if(colorIdx == KYOTEN_BLUE){
		MyUser.BlueSts += vol;
	}else if(colorIdx == KYOTEN_YELLOW){
		MyUser.YellowSts += vol;
	}else if(colorIdx == KYOTEN_GREEN){
		MyUser.GreenSts += vol;
	}else if(colorIdx == KYOTEN_PURPLE){
		MyUser.PurpleSts += vol;
	}else if(colorIdx == KYOTEN_WHITE){
		MyUser.WhiteSts += vol;
	}else if(colorIdx == KYOTEN_WHITEGOLD){
		MyUser.WhiteGoldSts += vol;
	}else if(colorIdx == KYOTEN_WHITESILVER){
		MyUser.WhiteSilverSts += vol;
	}else if(colorIdx == KYOTEN_WHITECOPPER){
		MyUser.WhiteCopperSts += vol;
	}else if(colorIdx == KYOTEN_BLACK){
		MyUser.BlackSts += vol;
	}else if(colorIdx == KYOTEN_BLACKGOLD){
		MyUser.BlackGoldSts += vol;
	}else if(colorIdx == KYOTEN_BLACKSILVER){
		MyUser.BlackSilverSts += vol;
	}else if(colorIdx == KYOTEN_BLACKCOPPER){
		MyUser.BlackCopperSts += vol;
	}

}
function ClearAllInfoWindow(){
	for(i=0; i<g_InfoWindowList.length; i++){
		g_InfoWindowList[i].close(); // 吹き出しの表示
	}
	infoWindowList = [];
}

function ChangeModeInAdvanceOneStepTab(){
	g_StepExecuteFlg = false
	
	selectbox1 = document.getElementById("CurrentStepMode");
	mode1 = Number(selectbox1.options[selectbox1.selectedIndex].value);
	
	if(mode1 == MODE_KYOTEN_TAIZAI){
		if(CanTaizai() == false){
			alert("モード変更できませんでした")
			return;
		}
	}
	
	MyUser.CurrentMode = mode1;
	ClearEnemyImg()
	if(mode1 == MODE_KYOTEN_TAIZAI){
		kyotenIdx1 = GetNearestKyotenId(MyUser.lat1, MyUser.lng1);
		MyUser.CurrentKyotenType = MyUser.KyotenTypes[kyotenIdx1];
	}else if(mode1 == MODE_FIGHT){
		g_StartedFightFlg = false;
		InitUserFightSts(MyUser)
		MyUser.UStsUpRate = calcUpStsRate()
		MyUser.UStsDnRate = calcDnStsRate()
		MyUser.UStsUpDivValList = makeUpStsDivValList(MyUser.UStsUpRate)
		MyUser.UStsDnDivValList = makeDnStsDivValList(MyUser.UStsDnRate)
	}
	alert("モード変更しました")
	
	
	str1 = "モードを<span style='color:#ff0000;'>###"
	str1 += g_ModeJPStr[mode1]
	str1 += "###</span>に変更しました<br>"
	
	g_AdvanceOneStepLog += str1
	
	ShowAdvanceOneStepTab();
	
}

function TestInitUser(User){

    //攻撃力
    User.RedSts = 10
    //防御力
    User.BlueSts = 20
    //hp
    User.YellowSts = 30
    //回避率
    User.GreenSts = 20
    //命中率
    User.PurpleSts = 500
    //自分のステータス上昇発生率
    User.WhiteSts = 60
    //自分のステータス上昇時の上昇数値
    User.WhiteGoldSts = 70
    //相手がステータス低下を発生したときの防御数値
    User.WhiteSilverSts = 80
    //相手の起こすステータス低下発生に対する抵抗率
    User.WhiteCopperSts = 90
    //相手のステータス低下発生率
    User.BlackSts = 100
    //相手のステータス低下発生時の低下数値
    User.BlackGoldSts = 110
    //相手がステータス上昇を発生させたときの防御数値
    User.BlackSilverSts = 120
    //相手の起こすステータス上昇に対する抵抗率
    User.BlackCopperSts = 130
    
    User.RedStsExp = 140
    User.BlueStsExp = 150
    User.YellowStsExp = 160
    User.GreenStsExp = 170
    User.PurpleStsExp = 180
    User.WhiteStsExp = 190
    User.WhiteGoldStsExp = 200
    User.WhiteSilverStsExp = 210
    User.WhiteCopperStsExp = 220
    User.BlackStsExp = 230
    User.BlackGoldStsExp = 240
    User.BlackSilverStsExp = 250
    User.BlackCopperStsExp = 260
    
    User.KyotenNames = ["k1", "k2"]
    User.KyotenTypes = [KYOTEN_RED, KYOTEN_GREEN]
    User.KyotenLats = [34.66679331519424, 34.669087571994275]
    User.KyotenLngs = [138.02233232405075, 137.99314988933753]
    User.KyotenCount = 2;
    
    User.HavingYobiSuzuColor = [1, 0, 1, 0,
    							1, 0, 0, 0,
    							0, 0, 0, 0,
    							0]

    User.HavingYobiSuzuPower = [10, 0,30, 0,
    							90, 0, 0, 0,
    							0,  0, 0, 0,
    							0]

    User.HavingOiSuzuColor = [0, 0, 0, 1,
						      0, 1, 0, 1,
						      0, 0, 0, 0,
						      0]
						      
    User.HavingOiSuzuPower = [0, 0, 0,20,
    						  0,10, 0,90,
    						  0, 0, 0, 0,
    						  0]
    
    User.HavingCoin = 270
    
    User.HavingTimeSand = 280    
    User.TimeSandDownStsType = KYOTEN_BLACKGOLD
    User.TimeSandUpStsType = KYOTEN_BLUE
    
    User.FightEnemyLevel = 1;
    User.WinEnemyCount1 = [1,2,3,0,0,0,0,0,0,0,0,0]
    User.WinEnemyCount2 = [0,0,0,1,2,3,0,0,0,0,0,0]
    User.WinEnemyCount3 = [0,0,0,0,0,0,1,0,2,3,0,0]
    
    User.CurrentMode = MODE_NOTHING
    User.CurrentKyotenType = KYOTEN_RED
    
    User.LastPlayedDate = new Date();
    

	User.name1 = "DebugUser";
	User.CurrentHp = User.YellowSts; 
	//User.lat1 = 34.66986407528885;
	//User.lng1 = 138.01743997470177;
	
	User.lat1 = 34.66699364761426;
	User.lng1 = 138.02243468766275;
	
}

//ユーザーの戦闘用ステータスの初期化
function InitUserFightSts(User){
    //戦闘用一時ステータス    
    //攻撃力
	User.Fight_RedSts = User.RedSts
    //防御力
	User.Fight_BlueSts = User.BlueSts
    //hp
	User.Fight_YellowSts = User.YellowSts
	User.CurrentHp = User.YellowSts
	
    //回避率
	User.Fight_GreenSts = User.GreenSts
    //命中率
	User.Fight_PurpleSts = User.PurpleSts
    //自分のステータス上昇発生率
	User.Fight_WhiteSts = User.WhiteSts
    //自分のステータス上昇時の上昇数値
	User.Fight_WhiteGoldSts = User.WhiteGoldSts
    //相手がステータス低下を発生したときの防御数値
	User.Fight_WhiteSilverSts = User.WhiteSilverSts
    //相手の起こすステータス低下発生に対する抵抗率
	User.Fight_WhiteCopperSts = User.WhiteCopperSts
    //相手のステータス低下発生率
	User.Fight_BlackSts = User.BlackSts
    //相手のステータス低下発生時の低下数値
	User.Fight_BlackGoldSts = User.BlackGoldSts
    //相手がステータス上昇を発生させたときの防御数値
	User.Fight_BlackSilverSts = User.BlackSilverSts
    //相手の起こすステータス上昇に対する抵抗率
    User.Fight_BlackCopperSts = User.BlackCopperSts
}

//敵の戦闘用ステータスの初期化
function InitEnemyFightSts(Enemy){
    //戦闘用一時ステータス    
    //攻撃力
	Enemy.Fight_RedSts = Enemy.RedSts;
;
    //防御力
	Enemy.Fight_BlueSts = Enemy.BlueSts;
;
    //hp
	Enemy.Fight_YellowSts = Enemy.YellowSts;
	Enemy.CurrentHp = Enemy.YellowSts;
;
    //回避率
	Enemy.Fight_GreenSts = Enemy.GreenSts;
;
    //命中率
	Enemy.Fight_PurpleSts = Enemy.PurpleSts;
;
    //自分のステータス上昇発生率
	Enemy.Fight_WhiteSts = Enemy.WhiteSts;
;
    //自分のステータス上昇時の上昇数値
	Enemy.Fight_WhiteGoldSts = Enemy.WhiteGoldSts;
;
    //相手がステータス低下を発生したときの防御数値
	Enemy.Fight_WhiteSilverSts = Enemy.WhiteSilverSts;
;
    //相手の起こすステータス低下発生に対する抵抗率
	Enemy.Fight_WhiteCopperSts = Enemy.WhiteCopperSts;
;
    //相手のステータス低下発生率
	Enemy.Fight_BlackSts = Enemy.BlackSts;
;
    //相手のステータス低下発生時の低下数値
	Enemy.Fight_BlackGoldSts = Enemy.BlackGoldSts;
;
    //相手がステータス上昇を発生させたときの防御数値
	Enemy.Fight_BlackSilverSts = Enemy.BlackSilverSts;
;
    //相手の起こすステータス上昇に対する抵抗率
    Enemy.Fight_BlackCopperSts = Enemy.BlackCopperSts;
}

var MyUser = new User();
MyUser.name1 = 'USER1';
//TestInitUser(MyUser)

if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(
		function ( position )
		{
			// 取得したデータの整理
			var data1 = position.coords;

			// データの整理
			MyUser.lat1 = data1.latitude;
			MyUser.lng1 = data1.longitude;
			
			
		},
		function ( error )
		{
			alert("現在位置をセットできませんでした");
		},
		//オプション
		{
			"enableHighAccuracy": false,
			"timeout": 8000,
			"maximumAge": 2000
		}
	);
}

let MyEnemy = new Enemy();


function SetGoogleApiKey(){
	GoogleAPIKey = document.getElementById("GoogleApiKey1").value;
	Init();
}
function Init(){

	//デバイスのタイプ取得
	deviceType = (function(){
			var ua = navigator.userAgent;
			if(ua.indexOf('iPhone') > 0 ||
			   ua.indexOf('iPod') > 0 ||
			   ( ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) ){
			   		return 'smartPhone';
			}else if(ua.indexOf('iPad') > 0 ||
			   		 ua.indexOf('Android') > 0){
			   		return 'tablet';
			}else{
			   		return 'other';
			}
		 })();


	var srcURL = "https://maps.googleapis.com/maps/api/js?key=";
	srcURL += GoogleAPIKey;
	srcURL +="&callback=initMap";
	var s = document.createElement("script");
	s.src = srcURL;	

	var ele = document.getElementById("InitScriptTag");
	ele.appendChild(s);
	

	
	 
}


//現在位置をセットボタンを押したときの動作
function SetCenter(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function ( position )
			{
				// 取得したデータの整理
				var data1 = position.coords ;

				// データの整理
				var lat1 = data1.latitude;
				var lng1 = data1.longitude;
				
				g_Map.setCenter(new google.maps.LatLng(lat1, lng1));
				
				
			},
			function ( error )
			{
				alert("現在位置をセットできませんでした");
			},
			//オプション
			{
				"enableHighAccuracy": false,
				"timeout": 8000,
				"maximumAge": 2000
			}
		);
	}
}

function initMap() {
  g_MapOpts = {
    zoom: 14,//ズームレベル
    center: new google.maps.LatLng(34.67177000706186, 138.01001561998794)
  };
  g_Map = new google.maps.Map(document.getElementById("map"), g_MapOpts);
  
	
  //現在位置マーカをセット
  SetCurrentLatLngMarker(MyUser);
	
  //拠点マーカをセット
  SetKyotenMaker(MyUser);
  
		//マップをクリックしたときの処理
	g_Map.addListener('click', function(e){
		if(g_KyotenTuikaFlg == true){
		 	let mopts = {
				position: e.latLng,
				map: g_Map,
				title: "click_pos",
				icon: {
				fillColor: "#0000FF",                //塗り潰し色
				fillOpacity: 0.8,                    //塗り潰し透過率
				path: google.maps.SymbolPath.CIRCLE, //円を指定
				scale: 8,                           //円のサイズ
				strokeColor: "#0000FF",              //枠の色
				}
			
				};

			if(g_CurrentMarker != null){
				g_CurrentMarker.setMap(null);
				g_CurrentMarker =  null;
			}
			
			let marker1 = new google.maps.Marker(mopts);
			g_CurrentMarker = marker1;
			
			
		}else if(g_KyotenSakujoFlg == true){
			
		}
	});
	
  
}

function GetGoogleMarkerByLatLng(lat, lng){
	for(i=0; i<g_KyotenMarkerList.length; i++){
		marker1 = g_KyotenMarkerList[i];
		dist1 = distance(lat, lng, marker1.position.lat(), marker1.position.lng());
		if(dist <= KYOTEN_MIN_INTERVAL){
			return marker1
		}
	}
}

var current; // 現在のタブの状態を保持する変数

//タブのリンク一覧
var Tablinks = [];


(function(){
var menu = document.getElementById('tab_menu1');
var content = document.getElementById('tab_content1');
var links = menu.getElementsByTagName('a');


//Tablinkのリスト取得
for (var i = 0, l = links.length;i < l; i++){
  if(links[i].className == 'Tablink'){
  	Tablinks.push(links[i]);
  }
}
//各タブの初期化
for (var j = 0;j < Tablinks.length; j++){
  tab_init(Tablinks[j], j);
}
function tab_init(link, index){
  var id = link.hash.slice(1);
  var page = document.getElementById(id);
  if (!current){ // 状態の初期化
    current = {page:page, menu:link};
    page.style.display = 'block';
    link.className = 'active';
  } else {
    page.style.display = 'none';
  }
  
  
  if(id == 'page1-1'){//タスク検索タブの初期表示メソッド
  	  link.onclick = function(){
  	  	changeTab(link);
  	  	
  	  	return false;

  	  }
  }else if(id == 'page1-2'){//タスク登録タブの初期表示メソッド
	  link.onclick = function(){
		  	changeTab(link);

			  	
			return false;
		};
  }else if(id == 'pageStatusList'){//タスク登録タブの初期表示メソッド
	  link.onclick = function(){
		  	changeTab(link);
			
			ShowStsListTab();
			  	
			return false;
		};
  }else if(id == 'pageAddKyoten'){
  	 link.onclick = function(){
  		changeTab(link);
  	
  		g_KyotenTuikaFlg = true;
  		
  		return false;
  	  };
  }else if(id == 'pageDeleteKyoten'){
	  link.onclick = function(){
		  	changeTab(link);
		  	
		  	g_KyotenSakujoFlg = true;
			  	
			return false;
		};
  }else if(id == 'pageUpgradeStatus'){
	  link.onclick = function(){
		  	changeTab(link);
			  	
			return false;
		};
  }else if(id == 'pageYobiSuzuSetting'){
	  link.onclick = function(){
		  	changeTab(link);
			
			ShowYobisuzuSettingTab()
			
			return false;
		};
  }else if(id == 'pageYobiSuzuKyoka'){
	  link.onclick = function(){
		  	changeTab(link);
			
			
			return false;
		};
  }else if(id == 'pageTokimodoshiSetting'){
	  link.onclick = function(){
		  	changeTab(link);
			
			ShowTokimodoshiSettingTab();
			
			return false;
		};
  }else if(id == 'pageSaiseiSetting'){
	  link.onclick = function(){
		  	changeTab(link);
			
			ShowSaiseiSettingTab();
			
			return false;
		};
  }else if(id == 'pageAdvanceOneStep'){
	  link.onclick = function(){
		  	changeTab(link);
			
			ShowAdvanceOneStepTab();
			
			return false;
		};
  }else if(id == 'pageSaveAndLoadGameData'){
	  link.onclick = function(){
		  	changeTab(link);
			
			return false;
		};
  }else if(id == 'pageEnemyLevelSetting'){
	  link.onclick = function(){
		  	changeTab(link);

			ShowEnemyLevelSettingTab();
						
			return false;
		};
  }else if(id == 'pageKyusokuPercentageSetting'){
	  link.onclick = function(){
		  	changeTab(link);

			ShowKyusokuPercentageSettingTab();
						
			return false;
		};
  }else if(id == 'pageWinEnemyCount'){
	  link.onclick = function(){
		  	changeTab(link);

			ShowWinEnemyCountTab();
						
			return false;
		};
  }else if(id == 'pageKyokaWithCoins'){
	  link.onclick = function(){
		  	changeTab(link);

			ShowKyokaWithCoinsTab();
						
			return false;
		};
  }else if(id == 'pageTodaySuccess'){
  	  link.onclick = function(){
		  	changeTab(link);

			ShowTodaySuccessTab();
						
			return false;
		};
  }
  
}
})();

function ShowTodaySuccessTab(){

	elem1 = document.getElementById("TotalKyotenTaizaiMiniteSpan");
	elem1.innerHTML = MyUser.TodayTotalKyotenTaizaiMinite;
	
	elem2 = document.getElementById("EarnedTotalExpSpan");
	elem2.innerHTML = MyUser.TodayEarnedTotalExp;
	
	elem3 = document.getElementById("EarnedTotalCoinSpan");
	elem3.innerHTML = MyUser.TodayEarnedTotalCoin;
	
	elem4 = document.getElementById("EarnedTotalTimeSandSpan");
	elem4.innerHTML = MyUser.TodayEarnedTotalTimeSand;
}

function ShowWinEnemyCountTab(){

	let ElemIdName  = ""
	for(var i=ENEMYTYPE_MIN-1; i<ENEMYTYPE_MAX; i++){
		ElemIdName = "WinEnemyType"
		ElemIdName += (i+1)
		ElemIdName += "CountLevel1Span";
		
		elem1 = document.getElementById(ElemIdName);
		elem1.innerHTML = MyUser.WinEnemyCount1[i]
		
		ElemIdName = "WinEnemyType"
		ElemIdName += (i+1)
		ElemIdName += "CountLevel2Span";
		
		elem1 = document.getElementById(ElemIdName);
		elem1.innerHTML = MyUser.WinEnemyCount2[i]
		
		ElemIdName = "WinEnemyType"
		ElemIdName += (i+1)
		ElemIdName += "CountLevel3Span";
		
		elem1 = document.getElementById(ElemIdName);
		elem1.innerHTML = MyUser.WinEnemyCount3[i]
		
		ElemIdName = "WinEnemyType"
		ElemIdName += (i+1)
		ElemIdName += "CountLevel4Span";
		
		elem1 = document.getElementById(ElemIdName);
		elem1.innerHTML = MyUser.WinEnemyCount4[i]
		
	}
}

function ShowKyokaWithCoinsTab(){
}

function ShowAdvanceOneStepTab(){
	span1 = document.getElementById("pageAdvanceOneStep_CurrentMode");
	span1.innerHTML = g_ModeJPStr[MyUser.CurrentMode]
	
	span1 = document.getElementById("pageAdvanceOneStep_LogSpan");
	span1.innerHTML = g_AdvanceOneStepLog
	
	span1 = document.getElementById("pageAdvanceOneStep_StepExecuteFlgSpan");
	if(g_StepExecuteFlg == true){
		span1.innerHTML = "true";
	}else{
		span1.innerHTML = "false";
	}
	
	if(MyUser.CurrentMode == MODE_KYOTEN_TAIZAI){
		span1 = document.getElementById("pageAdvanceOneStep_KyotenTypeSpan");
		
		str1 = g_KyotenColorNames[MyUser.CurrentKyotenType];
		if(MyUser.CurrentKyotenType <= KYOTEN_NIJI){
			str1 += "の拠点"
		}
		span1.innerHTML = str1
		
	}else{
		span1 = document.getElementById("pageAdvanceOneStep_KyotenTypeSpan");
		span1.innerHTML = "-"
	}
}

function ClearLogInAdvanceOneStepTab(){
	g_AdvanceOneStepLog = ""
	ShowAdvanceOneStepTab();
}
function ShowTokimodoshiSettingTab(){
	span1 = document.getElementById("CurrentDownStsInTokimodoshiDessert");
	span1.innerHTML = g_KyotenColorNames[MyUser.TimeSandDownStsType]
	
}
function GetNearestKyotenId(lat1, lng1){
    
    KyotenIdx = 0;
    dist2 = 999;
	for(i=0; i<MyUser.KyotenNames.length; i++){
		dist1 = distance(lat1, lng1, MyUser.KyotenLats[i], MyUser.KyotenLngs[i]);
		if(dist1 < dist2){
			KyotenIdx = i;
			dist2 = dist1
		}
	}
	
	return KyotenIdx;

}
function ChangeDownStsColorInTokimodoshiDessert(){
	selectbox1 = document.getElementById("DownStsInTokimodoshiDessert")
	colorId = Number(selectbox1.options[selectbox1.selectedIndex].value)
	MyUser.TimeSandDownStsType = colorId
	
	alert("設定を更新しました");
	ShowTokimodoshiSettingTab();
}

function ShowSaiseiSettingTab(){
	span1 = document.getElementById("CurrentUpStsInSaiseiForest");
	span1.innerHTML = g_KyotenColorNames[MyUser.TimeSandUpStsType]
	
}

function ShowKyusokuPercentageSettingTab(){
	span1 = document.getElementById("CurrentKyusokuPercentageInKyusokuPercentageSetting");
	span1.innerHTML = MyUser.KyusokuPercentage
}
function ShowEnemyLevelSettingTab(){
	span1 = document.getElementById("CurrentEnemyLevelInEnemyLevelSetting");
	span1.innerHTML = MyUser.FightEnemyLevel
}

function ChangeKyusokuPercentageInKyusokuPercentageSettingTab(){
	selectbox1 = document.getElementById("KyusokuPercentageInKyusokuPercentageSetting")
	kyusokuPercentage1 = Number(selectbox1.options[selectbox1.selectedIndex].value)
	MyUser.KyusokuPercentage = kyusokuPercentage1
	
	alert("設定を更新しました");
	ShowKyusokuPercentageSettingTab();
}

function ChangeEnemyLevelInEnemyLevelSettingTab(){
	selectbox1 = document.getElementById("EnemyLevelInEnemyLevelSetting")
	enemylevel1 = Number(selectbox1.options[selectbox1.selectedIndex].value)
	MyUser.FightEnemyLevel = enemylevel1
	
	alert("設定を更新しました");
	ShowEnemyLevelSettingTab();
}

function ChangeUpStsColorInSaiseiForest(){
	selectbox1 = document.getElementById("UpStsInSaiseiForest")
	colorId = Number(selectbox1.options[selectbox1.selectedIndex].value)
	MyUser.TimeSandUpStsType = colorId
	
	alert("設定を更新しました");
	ShowSaiseiSettingTab();
}
function ShowYobisuzuSettingTab(){

	let elemId;
	for(i=0; i<KYOTEN_NIJI; i++){
		flg = Number(MyUser.HavingYobiSuzuColor[i]);
		elemId = g_YobiSuzuSettingElemIdList[i]
		elem = document.getElementById(elemId)
		
		if(elem == null){
			alert(elemId)
			alert(i)
		}
		if(flg == 1){
			elem.selectedIndex = 0
		}else{
			elem.selectedIndex = 1
		}
	}
}
function ShowStsListTab(){

	span1 = document.getElementById("StsListRedSts")
	span1.innerHTML = MyUser.RedSts

	span1 = document.getElementById("StsListBlueSts")
	span1.innerHTML = MyUser.BlueSts

	span1 = document.getElementById("StsListYellowSts")
	span1.innerHTML = MyUser.YellowSts

	span1 = document.getElementById("StsListGreenSts")
	span1.innerHTML = MyUser.GreenSts

	span1 = document.getElementById("StsListPurpleSts")
	span1.innerHTML = MyUser.PurpleSts

	span1 = document.getElementById("StsListWhiteSts")
	span1.innerHTML = MyUser.WhiteSts

	span1 = document.getElementById("StsListWhiteGoldSts")
	span1.innerHTML = MyUser.WhiteGoldSts

	span1 = document.getElementById("StsListWhiteSilverSts")
	span1.innerHTML = MyUser.WhiteSilverSts

	span1 = document.getElementById("StsListWhiteCopperSts")
	span1.innerHTML = MyUser.WhiteCopperSts

	span1 = document.getElementById("StsListBlackSts")
	span1.innerHTML = MyUser.BlackSts

	span1 = document.getElementById("StsListBlackGoldSts")
	span1.innerHTML = MyUser.BlackGoldSts

	span1 = document.getElementById("StsListBlackSilverSts")
	span1.innerHTML = MyUser.BlackSilverSts

	span1 = document.getElementById("StsListBlackCopperSts")
	span1.innerHTML = MyUser.BlackCopperSts
	
	span1 = document.getElementById("StsListRedStsExp")
	span1.innerHTML = MyUser.RedStsExp

	span1 = document.getElementById("StsListBlueStsExp")
	span1.innerHTML = MyUser.BlueStsExp

	span1 = document.getElementById("StsListYellowStsExp")
	span1.innerHTML = MyUser.YellowStsExp

	span1 = document.getElementById("StsListGreenStsExp")
	span1.innerHTML = MyUser.GreenStsExp

	span1 = document.getElementById("StsListPurpleStsExp")
	span1.innerHTML = MyUser.PurpleStsExp

	span1 = document.getElementById("StsListWhiteStsExp")
	span1.innerHTML = MyUser.WhiteStsExp

	span1 = document.getElementById("StsListWhiteGoldStsExp")
	span1.innerHTML = MyUser.WhiteGoldStsExp

	span1 = document.getElementById("StsListWhiteSilverStsExp")
	span1.innerHTML = MyUser.WhiteSilverStsExp

	span1 = document.getElementById("StsListWhiteCopperStsExp")
	span1.innerHTML = MyUser.WhiteCopperStsExp

	span1 = document.getElementById("StsListBlackStsExp")
	span1.innerHTML = MyUser.BlackStsExp

	span1 = document.getElementById("StsListBlackGoldStsExp")
	span1.innerHTML = MyUser.BlackGoldStsExp

	span1 = document.getElementById("StsListBlackSilverStsExp")
	span1.innerHTML = MyUser.BlackSilverStsExp
	
	span1 = document.getElementById("StsListBlackCopperStsExp")
	span1.innerHTML = MyUser.BlackCopperStsExp

	span1 = document.getElementById("StsListCoin")
	span1.innerHTML = MyUser.HavingCoin

	span1 = document.getElementById("StsListTimeSand")
	span1.innerHTML = MyUser.HavingTimeSand
	
	span1 = document.getElementById("RedYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[0];

	span1 = document.getElementById("BlueYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[1];

	span1 = document.getElementById("YellowYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[2];

	span1 = document.getElementById("GreenYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[3];

	span1 = document.getElementById("PurpleYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[4];

	span1 = document.getElementById("WhiteYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[5];

	span1 = document.getElementById("WhiteGoldYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[6];

	span1 = document.getElementById("WhiteSilverYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[7];

	span1 = document.getElementById("WhiteCopperYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[8];

	span1 = document.getElementById("BlackYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[9];

	span1 = document.getElementById("BlackGoldYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[10];

	span1 = document.getElementById("BlackSilverYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[11];

	span1 = document.getElementById("BlackCopperYobiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingYobiSuzuPower[12];
	

	span1 = document.getElementById("RedOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[0];

	span1 = document.getElementById("BlueOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[1];

	span1 = document.getElementById("YellowOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[2];

	span1 = document.getElementById("GreenOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[3];

	span1 = document.getElementById("PurpleOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[4];

	span1 = document.getElementById("WhiteOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[5];

	span1 = document.getElementById("WhiteGoldOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[6];

	span1 = document.getElementById("WhiteSilverOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[7];

	span1 = document.getElementById("WhiteCopperOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[8];

	span1 = document.getElementById("BlackOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[9];

	span1 = document.getElementById("BlackGoldOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[10];

	span1 = document.getElementById("BlackSilverOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[11];

	span1 = document.getElementById("BlackCopperOiSuzuColorPowerSts");
	span1.innerHTML = MyUser.HavingOiSuzuPower[12];
	
}

//Userクラスの末尾に追加したマーカ情報を有効化する
function validateMarker(User){
		newId1=new Number(User.KyotenNames.length-1);
		latlng = new google.maps.LatLng(new Number(User.KyotenLats[newId1]), new Number(User.KyotenLngs[newId1]));
		let title1 = "";
		title1 = User.KyotenNames[i];
		
		
	 	let mopts = {
			position: latlng,
			map: g_Map,
			title: title1,
			icon: {
			fillColor: "#FF0000",                //塗り潰し色
			fillOpacity: 0.8,                    //塗り潰し透過率
			path: google.maps.SymbolPath.CIRCLE, //円を指定
			scale: 8,                           //円のサイズ
			strokeColor: "#FF0000",              //枠の色
			}
		
			};
		
		let marker1 = new google.maps.Marker(mopts);
		g_KyotenMarkerList.push(marker1);
  	


}

function SetCurrentLatLngMarker(User){
	

	latlng = new google.maps.LatLng(User.lat1, User.lng1);
	
	if(g_CurrentPositionMarker != null){
		g_CurrentPositionMarker.setMap(null)
		g_CurrentPositionMarker = null
	}
	
 	let mopts = {
		position: latlng,
		map: g_Map,
		title: "現在地",
		icon: {
		fillColor: "#888888",                //塗り潰し色
		fillOpacity: 0.5,                    //塗り潰し透過率
		path: google.maps.SymbolPath.CIRCLE, //円を指定
		scale: 2,                           //円のサイズ
		strokeColor: "#000000",              //枠の色
		},
		zIndex: 3
	
		};
	
	let marker1 = new google.maps.Marker(mopts);
	g_CurrentPositionMarker = marker1;

	    

}

//GoogleMap中のUserの拠点マーカをすべてクリアする
function ClearAllKyotenMarkerInMap(User){

	len1 = g_KyotenMarkerList.length;
	for(i=0; i<len1; i++){
		g_KyotenMarkerList[i].setMap(null);
	}
}

function SetKyotenMaker(User){

	var message1 = "";
	var g_Marker = "";
	
	ClearAllInfoWindow();
	ClearAllKyotenMarkerInMap(User);
	User.KyotenMarkerMessages = []
	
	if(User.KyotenNames.length == 0){
		return;
	}
	
	g_KyotenMarkerList =[]
	for(i=0; i<User.KyotenNames.length; i++){
		latlng = new google.maps.LatLng(User.KyotenLats[i], User.KyotenLngs[i]);
		title1 = User.KyotenNames[i];
		title1 += "-";
		message1 = "拠点タイプ:"
		if(User.KyotenTypes[i] < KYOTEN_TOKIMODORI){
			message1 += g_KyotenColorNames[User.KyotenTypes[i]];
			message1 += "の拠点" 
		}else{
			message1 += g_KyotenColorNames[User.KyotenTypes[i]];

		}
		title1 += message1;

		str2 = "("
		str2 += new String(User.KyotenTypes[i])
		str2 += ")"
	 	let mopts = {
			position: latlng,
			map: g_Map,
			title: title1,
			icon: {
			fillColor: "#FF0000",                //塗り潰し色
			fillOpacity: 0.8,                    //塗り潰し透過率
			path: google.maps.SymbolPath.CIRCLE, //円を指定
			scale: 8,                           //円のサイズ
			strokeColor: "#FF0000"              //枠の色
			},
			zIndex:1,
			label:{
				text: str2,
				color:'#000000',
				fontSize: '20px'
			}
		
			};
		
		//マーカレイヤを更新
		g_Marker = new google.maps.Marker(mopts);
		g_KyotenMarkerList.push(g_Marker);
		


  	}
  	
		
  	for(i=0; i<g_KyotenMarkerList.length; i++){
  		maker1 = g_KyotenMarkerList[i];
 		maker1.addListener( "click", function ( e ) {

	 		kyotenType1 = getKyotenTypeByLatLng(e.latLng.lat(), e.latLng.lng()); 	
 			if(g_KyotenSakujoFlg == true){
	 			
	 			if(g_CurrentDelCandidateMarker != null){
	 				g_CurrentDelCandidateMarker.setMap(null);
	 			}
	 			
	 			let marker3 = GetGoogleMarkerByLatLng(e.latLng.lat(), e.latLng.lng())
				
			 	let mopts = {
					position: marker3.position,
					map: g_Map,
					title: marker3.title,
					icon: {
					fillColor: "#00ff00",                //塗り潰し色
					fillOpacity: 0.8,                    //塗り潰し透過率
					path: google.maps.SymbolPath.CIRCLE, //円を指定
					scale: 8,                           //円のサイズ
					strokeColor: "#00ff00"              //枠の色
					},
					zIndex:2
				
					};
				
				g_CurrentDelCandidateMarker = new google.maps.Marker(mopts);

			}
 			

 			
	 		message1 = "クリックした拠点のタイプ:"
			if(kyotenType1 < KYOTEN_TOKIMODORI){
				message1 += g_KyotenColorNames[kyotenType1];
				message1 += "の拠点" 
			}else{
				message1 += g_KyotenColorNames[kyotenType1];

			}

			
		} ) ;
		
		}
  	

}

function getKyotenIdxByLatLng(lat, lng){
	for(i=0; i<MyUser.KyotenTypes.length; i++){
		marker1 = g_KyotenMarkerList[i];
		dist1 = distance(lat, lng, marker1.position.lat(), marker1.position.lng());
		if(dist <= KYOTEN_MIN_INTERVAL){
			return i
		}
	}
	return -1;
}
function getKyotenTypeByLatLng(lat, lng){
	for(i=0; i<MyUser.KyotenTypes.length; i++){
		if(MyUser.KyotenLats[i] == lat &&
		   MyUser.KyotenLngs[i] == lng ){
		   	return MyUser.KyotenTypes[i];
		   }
	}
	return -1;
}
function changeTab(link){
  var id = link.hash.slice(1);
  var page = document.getElementById(id);

    current.page.style.display = 'none';
    if(current.menu != null){
	    current.menu.className = '';
	}
    page.style.display = 'block';
    link.className = 'active';
    current.page = page;
    current.menu = link;
    
  g_KyotenTuikaFlg = false;
  g_KyotenSakujoFlg = false;
  
  Clearg_CurrentDelCandidateMarker();
}

function Clearg_CurrentDelCandidateMarker(){
	if(g_CurrentDelCandidateMarker != null){
		g_CurrentDelCandidateMarker.setMap(null)
	}
}
function SetHavingYobiSuzuCount(){

	let totalCount = 0;
	
	for(var i=0; i<KYOTEN_NIJI; i++){
		elem = document.getElementById(g_YobiSuzuSettingElemIdList[i])
		if(elem.selectedIndex == 0){
			totalCount++;
		}
	}
	
	if(totalCount > 5){
	
		alert("持ち込む鈴の種類は5種類までです")
		
	}else{
	
		for(var i=0; i<KYOTEN_NIJI; i++){
			elem = document.getElementById(g_YobiSuzuSettingElemIdList[i])
			if(elem.selectedIndex == 0){
				MyUser.HavingYobiSuzuColor[i] = 1
			}else{
				MyUser.HavingYobiSuzuColor[i] = 0
			}
		}
		
		alert("持ち込む鈴の種類を変更しました")
		ShowYobisuzuSettingTab()
		
		
	}
}
function AddKyoten_MyLatLng(){
	let selectbox1 = document.getElementById("AddKyotenTab_KyotenType");
	
	//値(value値)を取得
	let str1 = selectbox1.options[selectbox1.selectedIndex].value;
	let kyotenType1 = Number(str1);
	
	if(CanAddKyotenMyLatLng(MyUser) == true &&
	   CanAddKyotenOfKyotenType(kyotenType1) == true ){
		MyUser.KyotenCount++;
		let name1 = "k"+MyUser.KyotenCount;
	    MyUser.KyotenNames.push(name1);
	    
	    MyUser.KyotenTypes.push(kyotenType1);
	    MyUser.KyotenLats.push(MyUser.lat1)
	    MyUser.KyotenLngs.push(MyUser.lng1)
	    coin1 =  GetConstructCostCoinOfKyoten(kyotenType1)
	    MyUser.HavingCoin -= coin1
	    
	    validateMarker(MyUser)
	    	    
	    alert("拠点を追加しました")
	}
}
function DrawEnemyImg(enemyType){
	divElem = document.getElementById("EnemyTypeImgDiv");
	divElem.innerHTML = '';
	ImgElem = document.createElement('img');
	
	if(enemyType == 1){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e1.jpg"
	}else if(enemyType == 2){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e2.jpg"
	}else if(enemyType == 3){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e3.jpg"
	}else if(enemyType == 4){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e4.jpg"
	}else if(enemyType == 5){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e5.jpg"
	}else if(enemyType == 6){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e6.jpg"
	}else if(enemyType == 7){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e7.jpg"
	}else if(enemyType == 8){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e8.jpg"
	}else if(enemyType == 9){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e9.jpg"
	}else if(enemyType == 10){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e10.jpg"
	}else if(enemyType == 11){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e11.jpg"
	}else if(enemyType == 12){
		ImgElem.src = "https://raw.githubusercontent.com/NanjoMiyako/KyotenTaizai/main/enemyImg/e12.jpg"
	}
	
	divElem.appendChild(ImgElem);
	
}

function ClearEnemyImg(){
	divElem = document.getElementById("EnemyTypeImgDiv");
	divElem.innerHTML = '';
	ImgElem = document.createElement('img');
}

function HaveKyotenOfKyotenType(colorIdx){
	for(var i=0; i<MyUser.KyotenTypes.length; i++){
		if(MyUser.KyotenTypes[i] == colorIdx){
			return true;
		}
	}
	return false;
	
}
function CanAddKyotenOfKyotenType(colorIdx){
	coin1 =  GetConstructCostCoinOfKyoten(colorIdx)
	if(coin1 > MyUser.HavingCoin &&
	 g_KyotenMarkerList.length == 0 ||
	 !HaveKyotenOfKyotenType(colorIdx) ){
	 
	 	CrDate = g_CurrentYMDDate.getDate();
	 	CrMonth = g_CurrentYMDDate.getMonth();
	 	
	 	if(MyUser.LastCreateDate == CrDate &&
	 	   MyUser.LastCreateMonth == CrMonth ){
	 	   	alert('作成コスト以下で作成できる拠点一種は一日に一個までです')
	 	   	return false;
	 	}
	 	
		return true
	}else{
		alert('拠点作成のためのコインが足りません')
		str1 = 'このタイプの拠点作成には'
		str1 += coin1
		str1 += 'のコインが必要です'
		alert(str1)
		return false;
	}
}
function CanAddKyotenMyLatLng(User){
	
	for(i=0; i<User.KyotenNames.length; i++){
		dist1 = distance(User.lat1, User.lng1, User.KyotenLats[i], User.KyotenLngs[i]);
		if(dist1 < KYOTEN_MIN_INTERVAL){
			msg1 = "拠点同士の間隔は" + KYOTEN_MIN_INTERVAL + "メートル以上取ってください";
			alert(msg1);
			return false;
		}
	}
	return true;
}


function CanAddKyotenCurrentMarker(User){
	if(g_CurrentMarker == null){
		alert("クリックで拠点位置を指定してください")
		return false;
	}
	
	for(i=0; i<User.KyotenNames.length; i++){
		dist1 = distance(g_CurrentMarker.position.lat(), g_CurrentMarker.position.lng(), User.KyotenLats[i], User.KyotenLngs[i]);
		if(dist1 < KYOTEN_MIN_INTERVAL){
			msg1 = "拠点同士の間隔は" + KYOTEN_MIN_INTERVAL + "メートル以上取ってください";
			alert(msg1);
			return false;
		}
	}
	return true;
}
function AddKyoten(){

	let selectbox1 = document.getElementById("AddKyotenTab_KyotenType");
	
	//値(value値)を取得
	let str1 = selectbox1.options[selectbox1.selectedIndex].value;
	let kyotenType1 = Number(str1);
	
	if(CanAddKyotenCurrentMarker(MyUser) == true &&
	   CanAddKyotenOfKyotenType(kyotenType1) == true){
		MyUser.KyotenCount++;
		let name1 = "k"+MyUser.KyotenCount;
	    MyUser.KyotenNames.push(name1);
	    
	    MyUser.KyotenTypes.push(kyotenType1);
	    MyUser.KyotenLats.push(g_CurrentMarker.position.lat())
	    MyUser.KyotenLngs.push(g_CurrentMarker.position.lng())
	    coin1 =  GetConstructCostCoinOfKyoten(kyotenType1)
	    MyUser.HavingCoin -= coin1
	    	    
	    validateMarker(MyUser)
	    
	    g_CurrentMarker.setMap(null)
	    g_CurrentMarker=null
	    
	    SetKyotenMaker(MyUser)
	    
	    MyUser.LastCreateDate = Number(g_CurrentYMDDate.getDate());
	    MyUser.LastCreateMonth = Number(g_CurrentYMDDate.getMonth());
	    
	    alert("拠点を追加しました")
	}
	
	
}

function CanDeleteKyoten(){
	if(g_CurrentDelCandidateMarker == null){
		alert("クリックで削除する拠点位置を選択してください")
		return false;
	}
	return true;
}

function DeleteKyoten(){
	if(CanDeleteKyoten(MyUser) == true){
		let delIndex = getKyotenIdxByLatLng(g_CurrentDelCandidateMarker.position.lat(), g_CurrentDelCandidateMarker.position.lng());
		delMarker = g_KyotenMarkerList[delIndex];
		
    	MyUser.KyotenNames.splice(delIndex, 1)
    	MyUser.KyotenTypes.splice(delIndex, 1)
    	MyUser.KyotenLats.splice(delIndex, 1)
    	MyUser.KyotenLngs.splice(delIndex, 1)
    	g_KyotenMarkerList.splice(delIndex, 1)
    	MyUser.KyotenMarkerMessages.splice(delIndex, 1)
	    
	    delMarker.setMap(null)
	    g_CurrentDelCandidateMarker.setMap(null)
	    g_CurrentDelCandidateMarker=null
	    
	    SetKyotenMaker(MyUser)
	    alert("拠点を削除しました")
	}
}

function CanTaizai(){
	kyotenIdx1 = GetNearestKyotenId(MyUser.lat1, MyUser.lng1);
	dist1 = distance(MyUser.lat1, MyUser.lng1, MyUser.KyotenLats[kyotenIdx1], MyUser.KyotenLngs[kyotenIdx1]);
	if(dist1 <= KYOTEN_MIN_INTERVAL){
		return true;
	}else{
		return false;
	}
}
function UpgradeStatus(){

	UpPt = parseInt(MyUser.RedStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.RedSts += UpPt
	MyUser.RedStsExp -= ConsumeExp
	
	UpPt = parseInt(MyUser.BlueStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.BlueSts += UpPt
	MyUser.BlueStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.YellowStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.YellowSts += UpPt
	MyUser.YellowStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.GreenStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.GreenSts += UpPt
	MyUser.GreenStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.PurpleStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.PurpleSts += UpPt
	MyUser.PurpleStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.WhiteStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.WhiteSts += UpPt
	MyUser.WhiteStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.WhiteGoldStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.WhiteGoldSts += UpPt
	MyUser.WhiteGoldStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.WhiteSilverStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.WhiteSilverSts += UpPt
	MyUser.WhiteSilverStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.WhiteCopperStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.WhiteCopperSts += UpPt
	MyUser.WhiteCopperStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.BlackStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.BlackSts += UpPt
	MyUser.BlackStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.BlackGoldStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.BlackGoldSts += UpPt
	MyUser.BlackGoldStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.BlackSilverStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.BlackSilverSts += UpPt
	MyUser.BlackSilverStsExp -= ConsumeExp

	UpPt = parseInt(MyUser.BlackCopperStsExp / 10)
	ConsumeExp = 10 * UpPt
	MyUser.BlackCopperSts += UpPt
	MyUser.BlackCopperStsExp -= ConsumeExp

    alert("ステータスを強化しました")
}

function YobiSuzuKyoka(){
	elem1 = document.getElementById("YobiSuzuKyokaColor");
	elem2 = document.getElementById("YobiSuzuKyokaConsumeCoin")
	colorId = Number(elem1.options[elem1.selectedIndex].value);
	coin1 = Number(elem2.options[elem2.selectedIndex].value);
	
	if(coin1 > MyUser.HavingCoin){
		alert("強化用コインが足りません")
		return
	}else{
		upPt = coin1 / KYOKA_COIN_UNIT;
		MyUser.HavingCoin -= coin1;
		MyUser.HavingYobiSuzuPower[colorId] += upPt
		
		str1 = g_KyotenColorNames[colorId]
		str1 += "鈴を"
		str1 += upPt
		str1 += "だけ強化しました"
		alert(str1);
		
	}
}

function KyokaWithCoins(){
	let element = document.getElementById('CoinsWithKyoka');
	coins = element.value;
	if(MyUser.HavingCoin < coins || coins < 10){
		alert("強化に必要なコインが足りません")
		return		
	}
	UpPt = Math.floor(coins / 10)
	MyUser.HavingCoin -= Math.floor(UpPt * 10);

	addVol = 1
	for(var i=0; i<UpPt; i++){
	
		kyotenIdx1 = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
		addExpOrCoinOrTimeSand(kyotenIdx1, addVol,0)
		
	}
	
	alert("コインを消費して経験値を取得しました")
	
}

function StartStepExecuteInAdvanceOneStepTab(){
	g_StepExecuteFlg = true
	
	SEFunc1();
}

function EndStepExecuteInAdvanceOneStepTab(){
	g_StepExecuteFlg = false
	
	ShowAdvanceOneStepTab()
}

function addExpOrCoinOrTimeSand(kyotenType, vol,decVol){
	var str2 = "";

	if(kyotenType >= KYOTEN_RED && kyotenType < KYOTEN_NIJI){
		AddCurrentExpVol(kyotenType, vol);
		
		str2 = g_KyotenColorNames[kyotenType]
		str2 += "の経験値を"
		str2 += vol
		str2 += "だけゲットした<br>"
		g_AdvanceOneStepLog += str2
		
		MyUser.TodayEarnedTotalExp += vol
		
		
	}else if(kyotenType == KYOTEN_NIJI){
		//特に処理なし(前処理で経験値の加算処理を行う)
		
	}else if(kyotenType == KYOTEN_TOKIMODORI){
		val1 = GetCurrentStsVol(MyUser.TimeSandDownStsType);
		if(val1 < decVol){
			return;
		}else{
			AddCurrentStsVol(MyUser.TimeSandDownStsType, -decVol)
			MyUser.HavingTimeSand += vol;
			
			str2 = "時の砂を"
			str2 += vol
			str2 += "だけゲットした<br>"
			str2 += g_KyotenColorNames[MyUser.TimeSandDownStsType]
			str2 += "の力が"
			str2 += decVol
			str2 += "だけ下がった<br>"
			g_AdvanceOneStepLog += str2
			
			MyUser.TodayEarnedTotalTimeSand += vol
		}
		
	}else if(kyotenType == KYOTEN_SAISEI){
		if(MyUser.HavingTimeSand < decVol){
			return
		}else{
			MyUser.HavingTimeSand -= decVol;
			AddCurrentExpVol(MyUser.TimeSandUpStsType, vol);
			
			str2 = g_KyotenColorNames[MyUser.TimeSandUpStsType]
			str2 += "の経験値を"
			str2 += vol
			str2 += "だけゲットした<br>"
			str2 += "時の砂を"
			str2 += decVol
			str2 += "だけ消費した<br>"
			g_AdvanceOneStepLog += str2
			
			MyUser.TodayEarnedTotalExp += vol
		}
	}else if(kyotenType == KYOTEN_OUGON){
		MyUser.HavingCoin += vol

		str2 = "コインを"
		str2 += vol
		str2 += "だけゲットした<br>"
		g_AdvanceOneStepLog += str2
		
		MyUser.TodayEarnedTotalCoin += vol
	}

}
var SEFunc1 = function StepExecute(){
	if(MyUser.CurrentMode == MODE_KYOTEN_TAIZAI){
		UpdateMyUserLatLng()
	}
	
	let str2 = ""
	if(g_StepExecuteFlg == true){
		currentTime = new Date()
		minDiff = (currentTime - g_PrevStepTime) / ONE_MINITE_SECOND;
		g_PassedStep = parseInt(minDiff)
		setTimeout(SEFunc1, ONE_STEP_SECOND * 1000)
	}
	
	//経験値等の加算処理
	if(MyUser.CurrentMode == MODE_KYOTEN_TAIZAI){
		kyotenIdx1 = GetNearestKyotenId(MyUser.lat1, MyUser.lng1);
		MyUser.CurrentKyotenType = MyUser.KyotenTypes[kyotenIdx1];
		if(CanTaizai() == false){
			alert('拠点から離れました')
			MyUser.CurrentMode = MODE_NOTHING;
			ShowAdvanceOneStepTab()
			
		}
		
		
		let addVol
		g_PrevCountStart++
		if(g_PrevCountStart >= GET_POINT_STEP_COUNT &&
		   g_PassedStep >= 1){
		   
		   MyUser.TodayTotalKyotenTaizaiMinite += g_PassedStep;
		   
			if(MyUser.CurrentKyotenType < KYOTEN_NIJI){
				addVol = 6 * g_PassedStep
				addExpOrCoinOrTimeSand(MyUser.CurrentKyotenType, addVol,0)
			}else if(MyUser.CurrentKyotenType == KYOTEN_NIJI){
			
				for(var i=0; i<g_PassedStep; i++){
					addVol = 2 * 1
				
					kyotenIdx1 = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
					addExpOrCoinOrTimeSand(kyotenIdx1, addVol,0)
					
					kyotenIdx1 = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
					addExpOrCoinOrTimeSand(kyotenIdx1, addVol,0)
				
				}
				
			}else if(MyUser.CurrentKyotenType == KYOTEN_TOKIMODORI){
				addVol = 1 * g_PassedStep
				decVol = 1 * g_PassedStep
				addExpOrCoinOrTimeSand(MyUser.CurrentKyotenType, addVol, decVol)
				
			}else if(MyUser.CurrentKyotenType == KYOTEN_SAISEI){
				addVol = 10 * g_PassedStep;
				decVol = 1 * g_PassedStep
				addExpOrCoinOrTimeSand(MyUser.CurrentKyotenType, addVol, decVol)
			}else if(MyUser.CurrentKyotenType == KYOTEN_OUGON){
				addVol = 1 * g_PassedStep;
				
				addExpOrCoinOrTimeSand(MyUser.CurrentKyotenType, addVol, 0);
			}
			g_PrevCountStart = 0;
			g_PassedStep = 0;
			g_PrevStepTime = currentTime
		}
	}else if(MyUser.CurrentMode == MODE_FIGHT){
	
		for(var i=0; i<g_PassedStep;  i++){
			g_PrevCountStart++
			if(g_PrevCountStart >= GET_POINT_STEP_COUNT){

				g_PrevCountStart = 0;
				if(g_StartedFightFlg == true){
					AttackOrKyusoku = decideKyusokuOrAttack(MyUser.KyusokuPercentage)
					if(AttackOrKyusoku == ATTACK_TURN){
						StepMyUserAttackTurn();
						
						if(MyEnemy.CurrentHp >= 1){
							AttackOrKyusoku2 = decideKyusokuOrAttack(MyEnemy.KyusokuPercentage)
							if(AttackOrKyusoku2 == ATTACK_TURN){
								StepEnemyAttackTurn();
							}else if(AttackOrKyusoku2 == KYUSOKU_TURN){
								StepEnemyKyusokuTurn();
							}
						}
						
						let fightResult = JudgeWinOrLose();
						
						if(fightResult == FIGHT_RESULT_CONTINUE){
						
						}else if(fightResult == FIGHT_RESULT_WIN){
							g_StartedFightFlg = false;
							str2 = "勝利した<br>"
							g_AdvanceOneStepLog += str2
							

							MyUser.HavingCoin += MyEnemy.HavingCoin;
							str2 = "コインを"
							str2 += MyEnemy.HavingCoin
							str2 += "だけゲットした<br>"
							g_AdvanceOneStepLog += str2
							
							if(MyUser.FightEnemyLevel == 1){
								let idx2 = MyEnemy.EnemyType;
								MyUser.WinEnemyCount1[MyEnemy.EnemyType] += 1
							}else if(MyUser.FightEnemyLevel == 2){
								let idx2 = MyEnemy.EnemyType;
								MyUser.WinEnemyCount1[MyEnemy.EnemyType] += 1
							}else if(MyUser.FightEnemyLevel == 3){
								let idx2 = MyEnemy.EnemyType;
								MyUser.WinEnemyCount1[MyEnemy.EnemyType] += 1
							}
												
							kyotenIdx1 = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
							addExpOrCoinOrTimeSand(kyotenIdx1, MyEnemy.HavingExp , 0)
							
						
						}else if(fightResult == FIGHT_RESULT_LOSE){
							g_StartedFightFlg = false;
							str2 = "敗北してしまった<br>"
							g_AdvanceOneStepLog += str2
							
						
						}
					}else if(AttackOrKyusoku == KYUSOKU_TURN){
						StepMyUserKyusokuTurn();
						
						if(MyEnemy.CurrentHp >= 1){
							AttackOrKyusoku2 = decideKyusokuOrAttack(MyEnemy.KyusokuPercentage)
							if(AttackOrKyusoku2 == ATTACK_TURN){
								StepEnemyAttackTurn();
								
							}else if(AttackOrKyusoku2 == KYUSOKU_TURN){
								StepEnemyKyusokuTurn();
								
							}
						}
						
						let fightResult = JudgeWinOrLose();
						
						if(fightResult == FIGHT_RESULT_CONTINUE){
						
						}else if(fightResult == FIGHT_RESULT_WIN){
							g_StartedFightFlg = false;
							str2 = "勝利した<br>"
							g_AdvanceOneStepLog += str2
							

							MyUser.HavingCoin += MyEnemy.HavingCoin;
							str2 = "コインを"
							str2 += MyEnemy.HavingCoin
							str2 += "だけゲットした<br>"
							g_AdvanceOneStepLog += str2
							
							if(MyUser.FightEnemyLevel == 1){
								MyUser.WinEnemyCount1[MyEnemy.EnemyType] += 1
							}else if(MyUser.FightEnemyLevel == 2){
								MyUser.WinEnemyCount2[MyEnemy.EnemyType] += 1
							}else if(MyUser.FightEnemyLevel == 3){
								MyUser.WinEnemyCount3[MyEnemy.EnemyType] += 1
							}else if(MyUser.FightEnemyLevel == 4){
								MyUser.WinEnemyCount4[MyEnemy.EnemyType] += 1
							}
												
							kyotenIdx1 = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
							addExpOrCoinOrTimeSand(kyotenIdx1, MyEnemy.HavingExp , 0)
							
						
						}else if(fightResult == FIGHT_RESULT_LOSE){
							g_StartedFightFlg = false;
							str2 = "敗北してしまった<br>"
							g_AdvanceOneStepLog += str2
							
						
						}
					
					}
					
				}else{
					CreateEnemy(MyUser.FightEnemyLevel, MyEnemy)
					InitEnemyFightSts(MyEnemy)
					DrawEnemyImg(MyEnemy.EnemyType);
					
					str2 = "エネミータイプ:"
					str2 += MyEnemy.EnemyType
					str2 += "の敵と遭遇した<br>"
					g_AdvanceOneStepLog += str2
					
					g_StartedFightFlg = true;

					InitUserFightSts(MyUser)				
					MyUser.UStsUpRate = calcUpStsRate()
					MyUser.UStsDnRate = calcDnStsRate()
					MyUser.UStsUpDivValList = makeUpStsDivValList(MyUser.UStsUpRate)
					MyUser.UStsDnDivValList = makeDnStsDivValList(MyUser.UStsDnRate)
				}
				
			}
		ShowAdvanceOneStepTab()
		
		}
		
		if(g_PassedStep >= 1){
			g_PrevCountStart = 0;
			g_PassedStep = 0;
			g_PrevStepTime = currentTime
		}
	}
	
	//alert("test")
	ShowAdvanceOneStepTab()
}

function StepMyUserKyusokuTurn(){
	rNum = getRandom(1, MyUser.Fight_YellowSts);
	kaifukuRyo = Math.min(MyUser.YellowSts-(MyUser.CurrentHp+1), rNum);
	if(MyUser.CurrentHp == MyUser.YellowSts){
		kaifukuRyo = 0
	}
	MyUser.CurrentHp += kaifukuRyo
	
	str2 = MyUser.name1
	str2 += "は休んだ<br>"
	str2 += MyUser.name1
	str2 += "の体力が"
	str2 += kaifukuRyo
	str2 += "だけ回復した"
	str2 += "<br>"
	g_AdvanceOneStepLog += str2
	
}

function StepEnemyKyusokuTurn(){
	rNum = getRandom(1, MyEnemy.Fight_YellowSts);
	kaifukuRyo = Math.min(MyEnemy.YellowSts-(MyEnemy.CurrentHp+1), rNum);
	if(MyEnemy.CurrentHp == MyEnemy.YellowSts){
		kaifukuRyo = 0
	}
	MyEnemy.CurrentHp += kaifukuRyo
	
	str2 = "敵は休んだ<br>"
	str2 += "敵の体力が"
	str2 += kaifukuRyo
	str2 += "だけ回復した"
	str2 += "<br>"
	g_AdvanceOneStepLog += str2
	
}
function StepMyUserAttackTurn(){

	rDm = getRandom(DM_RND_VOL_MIN, DM_RND_VOL_MAX);
	Dm1 = Math.max(MyUser.Fight_RedSts-MyEnemy.Fight_BlueSts, 0)
	
	Dm = rDm + Dm1
	
	str2 = MyUser.name1
	str2 += "の攻撃<br>"
	g_AdvanceOneStepLog += str2
	
	if(HitJudge(MyEnemy.Fight_GreenSts, MyUser.Fight_PurpleSts) == true){
		MyEnemy.CurrentHp -= Dm
		if(MyEnemy.CurrentHp < 0){
			MyEnemy.CurrentHp = 0;
		}
				
		str2 = MyUser.name1
		str2 += "は敵に"
		str2 += Dm
		str2 += "のダメージを与えた"
		str2 += "(残りHp:"
		str2 += MyEnemy.CurrentHp
		str2 += ")<br>"
		g_AdvanceOneStepLog += str2
		
	}else{
	
		str2 = "攻撃はかわされてしまった<br>"
		g_AdvanceOneStepLog += str2
		
	}
	
	
	StsChange1 = DecideUpMyStsOrDnEmySts()
	if(StsChange1 == STS_UP){
		if(StsUpJudge(MyUser.Fight_WhiteSts, MyEnemy.Fight_BlackCopperSts) == true){
			//ステータス上昇
			v1 = calcStsUpVol(MyUser.Fight_WhiteGoldSts, MyEnemy.Fight_BlackSilverSts)
			colorIdx = decideUpSts(MyUser.UStsUpDivValList)
				AddMyUserFightStsVal(colorIdx, v1)
				
				str2 = MyUser.name1
				str2 += "の"
				str2 += g_KyotenColorNames[colorIdx]
				str2 += "の力が"
				str2 += v1
				str2 += "だけ上昇した<br>"
				g_AdvanceOneStepLog += str2
		}

	}else if(StsChange1 == STS_DOWN){
		if(StsDownJudge(MyUser.Fight_BlackSts, MyEnemy.Fight_WhiteCopperSts) == true){
			//ステータス低下
			v1 = calcStsDownVol(MyUser.Fight_BlackGoldSts, MyEnemy.WhiteSilverSts)
			colorIdx = decideDnSts(MyUser.UStsDnDivValList)
			AddMyEnemyFightStsVal(colorIdx, -v1)
			
			str2 = MyUser.name1
			str2 += "は敵の"
			str2 += g_KyotenColorNames[colorIdx]
			str2 += "の力を"
			str2 += v1
			str2 += "だけ低下させた<br>"
			g_AdvanceOneStepLog += str2
			
		}
	}
	
	//鈴耐久力変更
	SuzuConsume1 = DecideWetherSuzuPtConsume()
	if(SuzuConsume1 == SUZU_POINT_CONSUME){
		colorIdx = getRandom(KYOTEN_RED, KYOTEN_BLACKCOPPER);
		ConsumeSuzuType = DecideYobiOrOiSuzu();
		if(ConsumeSuzuType == YOBI_SUZU &&
		   MyUser.HavingYobiSuzuPower[colorIdx] >= 1){
			AddYobiSuzuColorPower(colorIdx, -1)
			
			str2 = g_KyotenColorNames[colorIdx]
			str2 += "呼鈴の耐久力が1下がった<br>"
			g_AdvanceOneStepLog += str2
			
		}else if(ConsumeSuzuType == OI_SUZU &&
				 MyUser.HavingOiSuzuPower[colorIdx] >= 1){
			AddOiSuzuColorPower(colorIdx, -1)
			
			str2 = g_KyotenColorNames[colorIdx]
			str2 += "追鈴の耐久力が1下がった<br>"
			g_AdvanceOneStepLog += str2
		}
	}
	

}

function AddYobiSuzuColorPower(colorIdx, val1){

	if(MyUser.HavingYobiSuzuPower[colorIdx] + val1 >= 0){
		MyUser.HavingYobiSuzuPower[colorIdx] += val1
	}
}

function AddOiSuzuColorPower(colorIdx, val1){

	if(MyUser.HavingOiSuzuPower[colorIdx] + val1 >= 0){
		MyUser.HavingOiSuzuPower[colorIdx] += val1
	}
}

function SaveGameData(){
	SaveLocalStrage();
}

function LoadGameData(){
	LoadLocalStorage();
	SetKyotenMaker(MyUser)
}
//ゲームデータの保存
function SaveLocalStrage(){
	
	MyUser.LastPlayedDate = g_CurrentYMDDate.getFullYear() + "-" ;

	if((g_CurrentYMDDate.getMonth()+1) < 10){
		MyUser.LastPlayedDate += "0";
	}
	MyUser.LastPlayedDate += String(Number(g_CurrentYMDDate.getMonth()+1));
	MyUser.LastPlayedDate += "-";
	
	
	if(g_CurrentYMDDate.getDate()< 10){
		MyUser.LastPlayedDate += "0";
	}
	MyUser.LastPlayedDate += String(g_CurrentYMDDate.getDate());
	
	
	//localStorage['MyUser20210612'] = JSON.stringify(MyUser);
	
	SaveAsTextFile(JSON.stringify(MyUser), "saveKyotenTaizaiGameData1.txt");
	
	alert('ゲームデータをセーブしました')
	
}

function SaveAsTextFile(text, filename){
  const blob = new Blob([text], { type: 'text/plain' });
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  link.click();
  
}

function LoadSaveDataFile(){

	LoadGameDataFromJsonFile(textOfFile1)
}



function LoadGameDataFromJsonFile(JsonFileText1){

	text1 = JsonFileText1
	
	MyUser = JSON.parse(text1)
	CurrentDate = new Date();
	termDay = (CurrentDate - MyUser.LastPlayedDate) / MIRI_SECONDS_OF_ONE_DAY;
	if(termDay >= 1){
		MyUser.HavingCoin += 10;
		alert('デイリーボーナスとして10コインゲットした')
		MyUser.LastPlayedDate = CurrentDate;
	}

	CrMonth = g_CurrentYMDDate.getMonth();
	CrDate = g_CurrentYMDDate.getDate();
	
	LPMonth = Number(MyUser.LastPlayedDate.substr( 5, 2 ));
	LPDate = Number(MyUser.LastPlayedDate.substr( 8, 2 ));
	
	if(LPMonth != (CrMonth+1) ||
	   LPDate != CrDate){
			MyUser.TodayEarnedTotalExp = 0;
			MyUser.TodayEarnedTotalCoin = 0;
			MyUser.TodayTotalKyotenTaizaiMinite = 0;
			MyUser.TodayEarnedTotalTimeSand = 0;
			

	   }

	
	alert('ゲームデータをロードしました')

}



function LoadLocalStorage(){

	MyUser = JSON.parse(localStorage['MyUser20210612'])
	CurrentDate = new Date();
	termDay = (CurrentDate - MyUser.LastPlayedDate) / MIRI_SECONDS_OF_ONE_DAY;
	if(termDay >= 1){
		MyUser.HavingCoin += 10;
		alert('デイリーボーナスとして10コインゲットした')
		MyUser.LastPlayedDate = CurrentDate;
	}

	CrMonth = g_CurrentYMDDate.getMonth();
	CrDate = g_CurrentYMDDate.getDate();
	
	LPMonth = Number(MyUser.LastPlayedDate.substr( 5, 2 ));
	LPDate = Number(MyUser.LastPlayedDate.substr( 8, 2 ));
	
	if(LPMonth != (CrMonth+1) ||
	   LPDate != CrDate){
			MyUser.TodayEarnedTotalExp = 0;
			MyUser.TodayEarnedTotalCoin = 0;
			MyUser.TodayTotalKyotenTaizaiMinite = 0;
			MyUser.TodayEarnedTotalTimeSand = 0;
			

	   }

	
	alert('ゲームデータをロードしました')
}


function AddMyUserFightStsVal(colorIdx, val1){

	if(colorIdx == KYOTEN_RED){
		MyUser.Fight_RedSts += val1
		
		if(MyUser.Fight_RedSts+val1 <= 0){
			MyUser.Fight_RedSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLUE){
		MyUser.Fight_BlueSts += val1

		if(MyUser.Fight_BlueSts+val1 <= 0){
			MyUser.Fight_BlueSts = 1
		}
	}

	if(colorIdx == KYOTEN_YELLOW){
		MyUser.Fight_YellowSts += val1
		
		if(MyUser.Fight_YellowSts+val1 <= 0){
			MyUser.Fight_YellowSts = 1
		}
	}

	if(colorIdx == KYOTEN_GREEN){
		MyUser.Fight_GreenSts += val1
		
		if(MyUser.Fight_GreenSts+val1 <= 0){
			MyUser.Fight_GreenSts = 1
		}
	}

	if(colorIdx == KYOTEN_PURPLE){
		MyUser.Fight_PurpleSts += val1
		
		if(MyUser.Fight_PurpleSts+val1 <= 0){
			MyUser.Fight_PurpleSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITE){
		MyUser.Fight_WhiteSts += val1
		
		if(MyUser.Fight_WhiteSts+val1 <= 0){
			MyUser.Fight_WhiteSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITEGOLD){
		MyUser.Fight_WhiteGoldSts += val1
		
		if(MyUser.Fight_WhiteGoldSts+val1 <= 0){
			MyUser.Fight_WhiteGoldSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITESILVER){
		MyUser.Fight_WhiteSilverSts += val1
		
		if(MyUser.Fight_WhiteSilverSts+val1 <= 0){
			MyUser.Fight_WhiteSilverSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITECOPPER){
		MyUser.Fight_WhiteCopperSts += val1
		
		if(MyUser.Fight_WhiteCopperSts+val1 <= 0){
			MyUser.Fight_WhiteCopperSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACK){
		MyUser.Fight_BlackSts += val1
		
		if(MyUser.Fight_BlackSts+val1 <= 0){
			MyUser.Fight_BlackSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKGOLD){
		MyUser.Fight_BlackGoldSts += val1
		
		if(MyUser.Fight_BlackGoldSts+val1 <= 0){
			MyUser.Fight_BlackGoldSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKSILVER){
		MyUser.Fight_BlackSilverSts += val1
		
		if(MyUser.Fight_BlackSilverSts+val1 <= 0){
			MyUser.Fight_BlackSilverSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKCOPPER){
		MyUser.Fight_BlackCopperSts += val1
		
		if(MyUser.Fight_BlackCopperSts+val1 <= 0){
			MyUser.Fight_BlackCopperSts = 1
		}

	}



}

function AddMyEnemyFightStsVal(colorIdx, val1){

	if(colorIdx == KYOTEN_RED){
		MyEnemy.Fight_RedSts += val1
		
		if(MyEnemy.Fight_RedSts+val1 <= 0){
			MyEnemy.Fight_RedSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLUE){
		MyEnemy.Fight_BlueSts += val1

		if(MyEnemy.Fight_BlueSts+val1 <= 0){
			MyEnemy.Fight_BlueSts = 1
		}
	}

	if(colorIdx == KYOTEN_YELLOW){
		MyEnemy.Fight_YellowSts += val1
		
		if(MyEnemy.Fight_YellowSts+val1 <= 0){
			MyEnemy.Fight_YellowSts = 1
		}
	}

	if(colorIdx == KYOTEN_GREEN){
		MyEnemy.Fight_GreenSts += val1
		
		if(MyEnemy.Fight_GreenSts+val1 <= 0){
			MyEnemy.Fight_GreenSts = 1
		}
	}

	if(colorIdx == KYOTEN_PURPLE){
		MyEnemy.Fight_PurpleSts += val1
		
		if(MyEnemy.Fight_PurpleSts+val1 <= 0){
			MyEnemy.Fight_PurpleSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITE){
		MyEnemy.Fight_WhiteSts += val1
		
		if(MyEnemy.Fight_WhiteSts+val1 <= 0){
			MyEnemy.Fight_WhiteSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITEGOLD){
		MyEnemy.Fight_WhiteGoldSts += val1
		
		if(MyEnemy.Fight_WhiteGoldSts+val1 <= 0){
			MyEnemy.Fight_WhiteGoldSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITESILVER){
		MyEnemy.Fight_WhiteSilverSts += val1
		
		if(MyEnemy.Fight_WhiteSilverSts+val1 <= 0){
			MyEnemy.Fight_WhiteSilverSts = 1
		}
	}

	if(colorIdx == KYOTEN_WHITECOPPER){
		MyEnemy.Fight_WhiteCopperSts += val1
		
		if(MyEnemy.Fight_WhiteCopperSts+val1 <= 0){
			MyEnemy.Fight_WhiteCopperSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACK){
		MyEnemy.Fight_BlackSts += val1
		
		if(MyEnemy.Fight_BlackSts+val1 <= 0){
			MyEnemy.Fight_BlackSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKGOLD){
		MyEnemy.Fight_BlackGoldSts += val1
		
		if(MyEnemy.Fight_BlackGoldSts+val1 <= 0){
			MyEnemy.Fight_BlackGoldSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKSILVER){
		MyEnemy.Fight_BlackSilverSts += val1
		
		if(MyEnemy.Fight_BlackSilverSts+val1 <= 0){
			MyEnemy.Fight_BlackSilverSts = 1
		}
	}

	if(colorIdx == KYOTEN_BLACKCOPPER){
		MyEnemy.Fight_BlackCopperSts += val1
		
		if(MyEnemy.Fight_BlackCopperSts+val1 <= 0){
			MyEnemy.Fight_BlackCopperSts = 1
		}

	}


}

function calcStsUpVol(joushoRyo, bougyoJoushoRyo){
	rVol = getRandom(DM_RND_VOL_MIN, DM_RND_VOL_MAX);
	Vol1 = Math.max(0, joushoRyo - bougyoJoushoRyo);
	Vol = rVol + Vol1;
	
	return Vol;
}

function calcStsDownVol(teikaRyo, bougyoTeikaRyo){
	rVol = getRandom(DM_RND_VOL_MIN, DM_RND_VOL_MAX);
	Vol1 = Math.max(0, teikaRyo - bougyoTeikaRyo);
	Vol = rVol + Vol1;
	
	return Vol;
}
function StepEnemyAttackTurn(){
	rDm = getRandom(DM_RND_VOL_MIN, DM_RND_VOL_MAX);
	Dm1 = Math.max(MyEnemy.Fight_RedSts-MyUser.Fight_BlueSts, 0)

	str2 = "敵の攻撃<br>"
	g_AdvanceOneStepLog += str2
	
	Dm = rDm + Dm1
	if(HitJudge(MyUser.Fight_GreenSts, MyEnemy.Fight_PurpleSts) == true){
		MyUser.CurrentHp -= Dm
		if(MyUser.CurrentHp < 0){
			MyUser.CurrentHp = 0;
		}
		str2 = MyUser.name1
		str2 += "は"
		str2 += Dm
		str2 += "のダメージを受けた"
		str2 += "(残りHp:"
		str2 += MyUser.CurrentHp
		str2 += ")<br>"
		g_AdvanceOneStepLog += str2
		
	}else{
		str2 = MyUser.name1
		str2 += "は敵の攻撃をかわした<br>"
		g_AdvanceOneStepLog += str2
	}
	
	StsChange1 = DecideDnMyStsOrUpEmySts()
	if(StsChange1 == STS_UP){
		if(StsUpJudge(MyEnemy.Fight_WhiteSts, MyUser.Fight_BlackCopperSts) == true){
			//ステータス上昇
			v1 = calcStsUpVol(MyEnemy.Fight_WhiteGoldSts, MyUser.Fight_BlackSilverSts)
			colorIdx = decideUpSts(MyEnemy.EStsUpDivValList)
			AddMyEnemyFightStsVal(colorIdx, v1)
			
			str2 = "敵の"
			str2 += g_KyotenColorNames[colorIdx]
			str2 += "の力が"
			str2 += v1
			str2 += "だけ上昇した<br>"
			g_AdvanceOneStepLog += str2
		}
	}else if(StsChange1 == STS_DOWN){
		if(StsDownJudge(MyEnemy.Fight_BlackSts, MyUser.Fight_WhiteCopperSts) == true){
			//ステータス低下
			v1 = calcStsDownVol(MyEnemy.Fight_BlackGoldSts, MyUser.WhiteSilverSts)
			colorIdx = decideDnSts(MyEnemy.EStsDnDivValList)
			AddMyUserFightStsVal(colorIdx, -v1)
			
			str2 = "敵は"
			str2 += MyUser.name1
			str2 += "の"
			str2 += g_KyotenColorNames[colorIdx]
			str2 += "の力を"
			str2 += v1
			str2 += "だけ低下させた<br>"
			g_AdvanceOneStepLog += str2
			
		}
	}

}


function StsUpJudge(joushouRitu, joushouTeikouRitu){
	
	percent = Math.min(90, Math.max(joushouRitu-joushouTeikouRitu, 5))
	rNum = getRandom(1, 100);
	
	if(rNum <= percent){
		return true
	}else{
		return false
	}
}

function StsDownJudge(teikaRitu, teikaTeikouRitu){
	
	percent = Math.min(90, Math.max(teikaRitu-teikaTeikouRitu, 5))
	rNum = getRandom(1, 100);
	
	if(rNum <= percent){
		return true
	}else{
		return false
	}
}


function DecideYobiOrOiSuzu(){
	rNum = getRandom(1, 100);
	if(rNum < 50){
		return YOBI_SUZU;
	}else{
		return OI_SUZU;
	}
}

function DecideWetherSuzuPtConsume(){
	rNum = getRandom(1, 100);
	if(rNum < 50){
		return SUZU_POINT_NOT_CONSUME
	}else{
		return SUZU_POINT_CONSUME
	}
}

function DecideUpMyStsOrDnEmySts(){
	rNum = getRandom(1, 100);
	if(rNum < 50){
		return STS_UP
	}else{
		return STS_DOWN
	}
}

function DecideDnMyStsOrUpEmySts(){
	rNum = getRandom(1, 100);
	if(rNum < 50){
		return STS_UP
	}else{
		return STS_DOWN
	}
}

function HitJudge(kaihiRitu, meityuRitu){

	percent = Math.min(90, Math.max(meityuRitu - kaihiRitu, 10));
	rNum = getRandom(1, 100);
	
	if(rNum <= percent){
		return true
	}else{
		return false
	}
}

function JudgeWinOrLose(){
	if(MyUser.CurrentHp <= 0){
		return FIGHT_RESULT_LOSE;
	}else if(MyEnemy.CurrentHp <= 0){
		return FIGHT_RESULT_WIN;
	}else{
		return FIGHT_RESULT_CONTINUE
	}
}

function CreateEnemy(enemyLevel, Enemy1){
	let min1, max1
	let min2, max2
	
	if(enemyLevel == 1){
		min1 = MIN_STS_VOL_LEVEL1
		max1 = MAX_STS_VOL_LEVEL1
		
		min2 = MIN_EXP_VOL_LEVEL1
		max2 = MAX_EXP_VOL_LEVEL1
		
		min3 = MIN_COIN_VOL_LEVEL1
		max3 = MAX_COIN_VOL_LEVEL1
		
	}else if(enemyLevel == 2){
		min1 = MIN_STS_VOL_LEVEL2
		max1 = MAX_STS_VOL_LEVEL2
		
		min2 = MIN_EXP_VOL_LEVEL2
		max2 = MAX_EXP_VOL_LEVEL2
		
		min3 = MIN_COIN_VOL_LEVEL2
		max3 = MAX_COIN_VOL_LEVEL2
		
	}else if(enemyLevel == 3){
		min1 = MIN_STS_VOL_LEVEL3
		max1 = MAX_STS_VOL_LEVEL3
		
		min2 = MIN_EXP_VOL_LEVEL3
		max2 = MAX_EXP_VOL_LEVEL3

		min3 = MIN_COIN_VOL_LEVEL3
		max3 = MAX_COIN_VOL_LEVEL3
	}else if(enemyLevel == 4){
		min1 = MIN_STS_VOL_LEVEL4
		max1 = MAX_STS_VOL_LEVEL4
		
		min2 = MIN_EXP_VOL_LEVEL4
		max2 = MAX_EXP_VOL_LEVEL4

		min3 = MIN_COIN_VOL_LEVEL4
		max3 = MAX_COIN_VOL_LEVEL4
	}
	
	Enemy1.EnemyType = getRandom(ENEMYTYPE_MIN, ENEMYTYPE_MAX)
	Enemy1.RedSts = getRandom(min1, max1)
	Enemy1.BlueSts = getRandom(min1, max1)
	Enemy1.YellowSts = getRandom(min1, max1)
	Enemy1.CurrentHp = Enemy1.YellowSts
	Enemy1.GreenSts = getRandom(min1, max1)
	Enemy1.PurpleSts = getRandom(min1, max1)
	Enemy1.WhiteSts = getRandom(min1, max1)
	Enemy1.WhiteGoldSts = getRandom(min1, max1)
	Enemy1.WhiteSilverSts = getRandom(min1, max1)
	Enemy1.WhiteCopperSts = getRandom(min1, max1)
	Enemy1.BlackSts = getRandom(min1, max1)
	Enemy1.BlackGoldSts = getRandom(min1, max1)
	Enemy1.BlackSilverSts = getRandom(min1, max1)
	Enemy1.BlackCopperSts = getRandom(min1, max1)
	Enemy1.HavingCoin = getRandom(min3, max3)
    Enemy1.HavingExp = getRandom(min2, max2)
    
	Enemy1.EStsUpDivValList = makeUpStsDivValList(Enemy1.EStsUpRate)
	Enemy1.EStsDnDivValList = makeDnStsDivValList(Enemy1.EStsDnRate)
    
    Enemy1.KyusokuPercentage = getRandom(KYUSOKU_PERCENTAGE_MIN, KYUSOKU_PERCENTAGE_MAX)
}

function decideKyusokuOrAttack(kyusokuPercentage1){

	let rNum = getRandom(1, 100);
	if(rNum <= kyusokuPercentage1){
		return ATTACK_TURN
	}else{
		return KYUSOKU_TURN
	}

}


//ルーレット値リストより、上昇ステータスカラーを決定する
function decideUpSts(divValList){
	let valTotal = 0;
	let colorIdx = 0;
	let CurrentVal = 0;
	
	for(var i=0; i<divValList.length; i++){
		valTotal += divValList[i];
	}
	
	rNum = getRandom(0, valTotal);
	for(var i=0; i<divValList.length; i++){
		if(divValList[i] >= rNum){
			colorIdx = i;
			break;
		}
	}
	
	return colorIdx;
	
}

//ルーレット値リストより、低下ステータスカラーを決定する
function decideDnSts(divValList){
	let valTotal = 0;
	let colorIdx = 0;
	let CurrentVal = 0;
	
	for(var i=0; i<divValList.length; i++){
		valTotal += divValList[i];
	}
	
	rNum = getRandom(0, valTotal);
	for(var i=0; i<divValList.length; i++){
		if(divValList[i] >= rNum){
			colorIdx = i;
			break;
		}
	}
	
	return colorIdx;
	
}


function makeUpStsDivValList(StsUpRate){

	let divValList = [];
	let valCurrent = 0;
	
	for(var i=0; i<StsUpRate.length; i++){
		valCurrent += StsUpRate[i];
		divValList[i] = valCurrent;
	}
	
	return divValList;
	
}

function makeDnStsDivValList(StsDnRate){

	let divValList = [];
	let valCurrent = 0;
	
	for(var i=0; i<StsDnRate.length; i++){
		valCurrent += StsDnRate[i];
		divValList[i] = valCurrent;
	}
	
	return divValList;
	
}


//色別ステータス上昇確率計算
//g_StsDnRate = [60,60,60,60,60,60,60,60,60,60,60,60]
function calcUpStsRate(){

	let StsUpRate = [10,10,10,10,
					 10,10,10,10,
					 10,10,10,10,
					 10]
	let havingYobiSuzuCount = 0;
	let SuzuIdAndPower = [[1,10], [1,10], [1,10], [1,10],
						  [1,10], [1,10], [1,10], [1,10],
						  [1,10], [1,10], [1,10], [1,10],
						  [1,10] ]
	for(var i=0; i<MyUser.HavingYobiSuzuColor.length; i++){
		SuzuIdAndPower[i][0] = i;
		if(MyUser.HavingYobiSuzuColor == 1 &&
		   MyUser.HavingYobiSuzuPower[i] >= 1){
			havingYobiSuzuCount++
			SuzuIdAndPower[i][1] =  HavingYobiSuzuPower[i]
		}else{

			SuzuIdAndPower[i][1] = 10;
		}
	}
	
	//耐久力の降順でソート
	SuzuIdAndPower.sort(function(a, b){
		return b[1] - a[1];
	});
	
	let j = havingYobiSuzuCount;
	for(var i=0; i<havingYobiSuzuCount; i++){
		StsUpRate[SuzuIdAndPower[i][0]] += UP_PERCENTAGE_UNIT * j
		j--;
	}
	
	return StsUpRate;

}



//色別ステータス低下確率計算
function calcDnStsRate(){

	let StsDnRate = [60,60,60,60,
					 60,60,60,60,
					 60,60,60,60,
					 60]
	let havingOiSuzuCount = 0;
	let SuzuIdAndPower = [[1,10], [1,10], [1,10], [1,10],
						  [1,10], [1,10], [1,10], [1,10],
						  [1,10], [1,10], [1,10], [1,10],
						  [1,10]]
	for(var i=0; i<MyUser.HavingOiSuzuColor.length; i++){
		SuzuIdAndPower[i][0] = i;
		if(MyUser.HavingOiSuzuColor == 1&&
		   MyUser.HavingOiSuzuPower[i] >= 1){
			havingYobiSuzuCount++
			SuzuIdAndPower[i][1] =  HavingOiSuzuPower[i]
		}else{

			SuzuIdAndPower[i][1] = 10;
		}
	}
	
	//耐久力の降順でソート
	SuzuIdAndPower.sort(function(a, b){
		return b[1] - a[1];
	});
	
	let j = havingOiSuzuCount;
	for(var i=0; i<havingOiSuzuCount; i++){
		StsDnRate[SuzuIdAndPower[i][0]] -= DOWN_PERCENTAGE_UNIT * j
		j--;
	}
	
	return StsDnRate;

}

function DrawScnShotOfStsList(){
  html2canvas(document.getElementById("pageStatusList"),{
    onrendered: function(canvas){
      //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
      var imgData = canvas.toDataURL();
      document.getElementById("result1").src = imgData;
    }
  });
}

function DrawScnShotOfWinEnemyCount(){
  html2canvas(document.getElementById("pageWinEnemyCount"),{
    onrendered: function(canvas){
      //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
      var imgData = canvas.toDataURL();
      document.getElementById("result1").src = imgData;
    }
  });
}

//最大値・最小値を引数に持つ関数
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}

/**
 * ２地点間の距離(m)を求める
 * ヒュベニの公式から求めるバージョン
 *
 * @param float lat1 緯度１
 * @param float lon1 経度１
 * @param float lat2 緯度２
 * @param float lon2 経度２
 * @param boolean mode 測地系 true:世界(default) false:日本
 * @return float 距離(m)
 */
function distance(lat1, lon1, lat2, lon2, mode=true)
{
    // 緯度経度をラジアンに変換
    radLat1 = deg2rad(lat1); // 緯度１
    radLon1 = deg2rad(lon1); // 経度１
    radLat2 = deg2rad(lat2); // 緯度２
    radLon2 = deg2rad(lon2); // 経度２

    // 緯度差
    radLatDiff = radLat1 - radLat2;

    // 経度差算
    radLonDiff = radLon1 - radLon2;

    // 平均緯度
    radLatAve = (radLat1 + radLat2) / 2.0;

    // 測地系による値の違い
    a = mode ? 6378137.0 : 6377397.155; // 赤道半径
    b = mode ? 6356752.314140356 : 6356078.963; // 極半径
    //e2 = (a*a - b*b) / (a*a);
    e2 = mode ? 0.00669438002301188 : 0.00667436061028297; // 第一離心率^2
    //a1e2 = a * (1 - e2);
    a1e2 = mode ? 6335439.32708317 : 6334832.10663254; // 赤道上の子午線曲率半径

    sinLat = Math.sin(radLatAve);
    W2 = 1.0 - e2 * (sinLat*sinLat);
    M = a1e2 / (Math.sqrt(W2)*W2); // 子午線曲率半径M
    N = a / Math.sqrt(W2); // 卯酉線曲率半径

    t1 = M * radLatDiff;
    t2 = N * Math.cos(radLatAve) * radLonDiff;
    dist = Math.sqrt((t1*t1) + (t2*t2));

    return dist;
}

function deg2rad(degrees) {
  return degrees * Math.PI / 180;
};

function rad2deg(radian){
        return radian * 360/(2*Math.PI);
}




