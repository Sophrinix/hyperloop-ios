"use hyperloop"
var frame = CGRectMake(100,100,20,20);
var window = new UIWindow();
var view = new UIView(frame);
var nativeObjects = {
	get frame() {
		return frame;
	},
	get window() {
		return window;
	},
	get view() {
		return view;
	}
};


var point = CGPointMake(10, 20);
var x = point.x;
var y = point.y;

console.log('point.x='+x);
console.log('point.y='+y);

console.log('TI_EXIT');

// for now, we need to hold the window so it won't get cleaned up and then released
// once this module is completed.  we need to think about how to expose the root window
global.window = window;

view.backgroundColor = UIColor.blueColor();
window.addSubview(nativeObjects.view);
window.makeKeyAndVisible();

