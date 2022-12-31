import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("js");

  const newTodos = {
    text,
    id: Date.now(),
    isEdit: false,
    isDone: false,
    category,
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, newTodos]);
    setText("");
  };

  console.log("todos", todos);

  return (
    <>
      {/* 상단의 메뉴 탭 */}
      <SafeAreaView>
        <StView>
          <TouchableOpacity>
            <StText>Javascipt</StText>
          </TouchableOpacity>
          <TouchableOpacity>
            <StText>React</StText>
          </TouchableOpacity>
          <TouchableOpacity>
            <StText>CodingTest</StText>
          </TouchableOpacity>
        </StView>

        {/* 탭박스 아래의 실선 */}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 5,
          }}
        />

        {/* 상단 픽스 부분의 인풋박스 */}
        <StInput
          onSubmitEditing={addTodo}
          value={text}
          onChangeText={setText}
          placeholder="Enter your task"
        />
      </SafeAreaView>
      {/* 인풋 박스 아래 실선 */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          margin: 5,
        }}
      />

      {/* task들이 렌더링 되는 스크롤뷰 파트 */}
      <ScrollView>
        {todos.map((item) => {
          return (
            <StViewText key={item.id}>
              {/* task가 쓰여지는 텍스트부분 */}
              <Text>{item.text}</Text>
              <View style={{ flexDirection: "row" }}>
                {/* 각 실행되는 버튼들 모음  */}
                <AntDesign name="checksquare" size={24} color="black" />
                <AntDesign
                  name="form"
                  size={24}
                  color="black"
                  style={{ marginLeft: 5, marginRight: 5 }}
                />
                <AntDesign name="delete" size={24} color="black" />
              </View>
            </StViewText>
          );
        })}
      </ScrollView>
    </>
  );
}

// 상단의 탭 박스의 텍스트
const StText = styled.Text`
  width: 100px;
  height: 50px;
  margin: 10px;
  background-color: #82aae3;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  color: black;
`;

//상단의 탭 박스 전체 뷰
const StView = styled.View`
  flex-direction: row;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

// 중간에 있는 인풋박스
const StInput = styled.TextInput`
  border: 1px solid black;
  width: 95%;
  height: 50px;
  margin: 10px;
  padding: 5px;
`;

//렌더링으로 그려질 task예시박스
const StViewText = styled.View`
  flex-direction: row;
  background-color: #ece8dd;
  width: 95%;
  height: 50px;
  margin: 10px;
  justify-content: space-between;
  padding: 13px;
`;
