import React from "react"
import { Platform } from "react-native"
import { LoadingIndicator, LoadingView } from "./styles"

const LoadingScreen: React.FC = () => {
  return (
    <LoadingView>
      <LoadingIndicator size={Platform.OS === 'ios' ? 'large' : 42} color="#cd8d04" />
    </LoadingView>
  )
}

export default LoadingScreen;