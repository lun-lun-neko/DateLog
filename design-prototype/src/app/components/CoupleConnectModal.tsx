import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Copy, Heart, X } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CoupleConnectModalProps {
  onConnect: () => void;
  onSkip: () => void;
  canSkip?: boolean;
}

export function CoupleConnectModal({ onConnect, onSkip, canSkip = true }: CoupleConnectModalProps) {
  const [generatedCode, setGeneratedCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
    toast.success("코드가 생성되었습니다!");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast.success("코드가 복사되었습니다");
  };

  const connectWithCode = () => {
    if (!inputCode) {
      toast.error("코드를 입력해주세요");
      return;
    }
    // TODO: 커플 연결 API 호출
    console.log("연결 코드:", inputCode);
    toast.success("커플이 연결되었습니다!");
    setTimeout(() => onConnect(), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          {canSkip && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={onSkip}
            >
              <X className="size-5" />
            </Button>
          )}

          <div className="text-center space-y-4 pt-4">
            <div className="flex justify-center">
              <div className="size-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="size-8 text-white fill-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl">커플 연결</CardTitle>
              <CardDescription className="mt-2">
                상대방과 연결하여 함께 추억을 만들어요
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate">코드 생성</TabsTrigger>
              <TabsTrigger value="connect">코드 입력</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4">
              <div className="space-y-2">
                <Label>연결 코드</Label>
                {generatedCode ? (
                  <div className="flex gap-2">
                    <Input
                      value={generatedCode}
                      readOnly
                      className="font-mono text-lg text-center tracking-wider"
                    />
                    <Button onClick={copyCode} variant="outline" size="icon">
                      <Copy className="size-4" />
                    </Button>
                  </div>
                ) : (
                  <Button onClick={generateCode} className="w-full" size="lg">
                    코드 생성하기
                  </Button>
                )}
              </div>
              {generatedCode && (
                <p className="text-sm text-gray-600 text-center">
                  이 코드를 상대방에게 공유해주세요
                </p>
              )}
            </TabsContent>

            <TabsContent value="connect" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">상대방의 코드</Label>
                <Input
                  id="code"
                  placeholder="6자리 코드 입력"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                  maxLength={6}
                  className="font-mono text-lg text-center tracking-wider"
                />
              </div>
              <Button onClick={connectWithCode} className="w-full" size="lg">
                연결하기
              </Button>
            </TabsContent>
          </Tabs>

          {canSkip && (
            <div className="mt-6 text-center">
              <Button variant="ghost" onClick={onSkip} className="text-gray-500">
                나중에 연결하기
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
