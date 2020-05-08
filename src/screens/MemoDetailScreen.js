import React from "react";
import { StyleSheet, View, Text} from "react-native";

import CircleButton from "../elements/CircleButton";



class MemoDetailScreen extends React.Component {

  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({memo : params.memo });
  }

  dateString(date) {
    if (date == null) { return '';}
    const dateObject = date.toDate();
    return dateObject.toISOString().split("T")[0];
  }

  returnMemo(memo) {
    this.setState( { memo });
  }

  render() {
    const {memo} = this.state;
    return(
      <View style={styles.container}>

        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{String(memo.body).substring(0, 10)}</Text>
            <Text style={styles.memoHeaderDate}>{this.dateString(memo.createdOn)}</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {this.props.navigation.navigate("MemoEdit", {...memo, returnMemo: this.returnMemo.bind(this)});}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
  },

  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },

  memoHeaderDate: {
    fontSize: 12,
    color: "#FFF",
  },

  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },

  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
