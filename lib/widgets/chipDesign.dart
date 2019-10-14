import 'package:flutter/material.dart';

class ChipDesign extends StatelessWidget {
  final String label;
  final Color color;
  ChipDesign(this.label, this.color);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Chip(
        label: Text(
          label,
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: color,
        elevation: 4,
        shadowColor: Colors.grey[50],
        padding: EdgeInsets.all(4),
      ),
      margin: EdgeInsets.only(left: 12, right: 12, top: 2, bottom: 2),
    );
  }
}
