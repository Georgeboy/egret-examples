//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class TestShape {

    public getDescription():string {
        return "这个项目展示了Graphics";
    }

    public createExample():void {
        var container = new egret.DisplayObjectContainer();
        egret.MainContext.instance.stage.addChild(container);


         var shape1 = new egret.Shape();
         shape1.graphics.beginFill(0xff0000,.5);
         shape1.graphics.drawRect(50,50,100,100);
         shape1.graphics.endFill();
         container.addChild(shape1);

        var shape2 = new egret.Shape();
        shape2.graphics.lineStyle(5,0xffff00,1);
        shape2.graphics.moveTo(300,0);
        shape2.graphics.lineTo(300,300);
        shape2.graphics.endFill();
        container.addChild(shape2);
        shape2.x = 100;

        var shape3 = new egret.Shape();
        shape3.graphics.beginFill(0xff0000,.5);
        shape3.graphics.drawCircle(200,200,100);
        shape3.graphics.endFill();
        container.addChild(shape3);
    }
}