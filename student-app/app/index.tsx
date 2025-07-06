import React, { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <View style={styles.bg}>
      <Text style={styles.name}>LeBron James</Text>

      {/* Attendance Record Button */}
      <Pressable
        style={({ pressed }) => [
          styles.attendanceButton,
          { backgroundColor: pressed ? 'lightblue' : '#000' },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Attendance Record</Text>
      </Pressable>

      {/* Generate QR Code Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'lightblue' : '#000' },
        ]}
        onPress={() => setShowQR(true)}
      >
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </Pressable>

      {/* Placeholder Image */}
      {showQR && (
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?s=612x612&w=0&k=20&c=1xNf2q0hmndqAbqyTUUv6F_GbBhhCZkGHbiOERz91LE=' }}
          style={styles.qrImage}
        />
      )}

      {/* Modal for Attendance Table */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
            <Text style={styles.modalTitle}>Attendance Table</Text>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Days Late</Text>
              <Text style={styles.tableHeader}>On Time</Text>
              <Text style={styles.tableHeader}>Absent</Text>
            </View>
            {/* Placeholder value for attendance */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>3</Text>
              <Text style={styles.tableCell}>22</Text>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <Text style={styles.modalTitle}>Attendance Record</Text>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Time</Text>
              <Text style={styles.tableHeader}>Status</Text>
            </View>
            {/* Table of everyday's status */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#880088",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
    position: 'absolute',
    top: 10,
    left: 20,
  },
  attendanceButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  button: {
    top: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600"
  },
  qrImage: {
    top:100,
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center'
  },
  tableCell: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center'
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 8
  },
  closeText: {
    color: '#fff',
    fontWeight: '600'
  }
});