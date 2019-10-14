import 'package:flutter/material.dart';
import 'package:hologramsocial/data/CurvePainter.dart';
import 'package:hologramsocial/widgets/chipDesign.dart' as Generic;

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _currentIndex = 0;
  int length = 5;

  TextStyle headerBox = TextStyle(
      color: Colors.grey.shade500, fontSize: 30, fontWeight: FontWeight.bold);
  List<String> item = [
    "Word to translate",
    "Word to translate",
    "Word to translate"
  ];
  // if get API - increase length & append text to list;

  @override
  Widget build(BuildContext context) {
    //adjusts
    final deviceWidth = MediaQuery.of(context).size.width;

    final txt = Padding(
      padding: EdgeInsets.only(bottom: 20.0, left: 20.0, right: 20.0),
      child: Material(
        elevation: 5.0,
        borderRadius: BorderRadius.circular(12.0),
        shadowColor: Colors.white,
        child: Container(
          padding: EdgeInsets.all(15.0),
          width: deviceWidth,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12.0),
            color: Colors.white,
          ),
          constraints: BoxConstraints(minHeight: 100.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(
                height: 5.0,
              ),
              Text(
                "#1 " + "Title",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(
                height: 2.0,
              ),
              Wrap(children: <Widget>[Text(item[0])].toList())
            ],
          ),
        ),
      ),
    );
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.pink.shade100,
        selectedItemColor: Colors.white,
        selectedIconTheme: IconThemeData(size: 40),
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("Home"),
          ),
          BottomNavigationBarItem(
              activeIcon: Icon(Icons.cloud),
              icon: Icon(Icons.cloud),
              title: Text(
                "Snaps",
                //      style: TextStyle(color: Colors.white),
              )),
          BottomNavigationBarItem(
            icon: Icon(Icons.refresh),
            title: Text(
              "Shares",
              //  style: TextStyle(color: Colors.white),
            ),
          ),
        ],
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
      resizeToAvoidBottomInset: false, // set it to false

      appBar: AppBar(
        backgroundColor: Colors.pink.shade100,
        title: Text("Social"),
        actions: <Widget>[
          Container(
              alignment: Alignment.bottomRight,
              child: Column(
                children: <Widget>[Icon(Icons.forward), Text("Snaps")],
              )),
        ],
      ),
      body: Stack(
        children: <Widget>[
          Positioned(
            child: TopBar(),
          ),
          Padding(
              padding: EdgeInsets.all(100),
              child: Container(
                  alignment: Alignment.center,
                  child: ListView.builder(
                    itemCount: length,
                    itemBuilder: (BuildContext context, int index) {
                      return Column(
                        children: <Widget>[
                          txt,
                          txt,
                          txt,
                          txt,
                        ],
                      );
                    },
                  ))),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: Align(
              alignment: Alignment.bottomLeft,
              child: Container(
                  height: 100,
                  width: 150,
                  decoration: BoxDecoration(
                      color: Colors.yellow.shade100,
                      border:
                          Border.all(width: 3.0, color: Colors.pink.shade100),
                      borderRadius: BorderRadius.all(Radius.circular(19))),
                  child: Column(
                    children: <Widget>[
                      SizedBox(
                        height: 15,
                      ),
                      Text(
                        "Calories",
                        style: headerBox,
                      ),
                      Text(
                        "30 kcal",
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      )
                    ],
                  )),
            ),
          ),
        ],
      ),
    );
  }
}

class TopBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      child: Container(
        height: 300.0,
      ),
      painter: CurvePainter(),
    );
  }
}
