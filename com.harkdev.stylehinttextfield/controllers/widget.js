var args = arguments[0] || {};

/***
 * Common arguments 
 */
args.height = args.height || Ti.UI.SIZE;
args.width = args.width || Ti.UI.FILL;
args.left = args.left || null;
args.right = args.right || null;
args.top = args.top || null;
args.bottom = args.bottom || null;

/***
 * TextField arguments 
 */
args.color = args.color || null;
args.font = args.font || null;
args.value = args.value || "";
args.passwordMask = args.passwordMask || false;
args.borderRadius = args.borderRadius || null;
args.borderWidth = args.borderWidth || null;
args.backgroundColor = args.backgroundColor || null;

/***
 * Hint Label arguments 
 */
// Color of the Hint Font
args.hintColor = args.hintColor || null;
// Font object for the hint
args.hintFont = args.hintFont || null;
// Hint text
args.hintText = args.hintText || null;
// Left value for the hint text
args.hintLeft = args.hintLeft || 10;
// Right value for the hint text
args.hintRight = args.hintRight || null;
// Top value for the hint text
args.hintTop = args.hintTop || null;
// Bottom value for the hint text
args.hintBottom = args.hintBottom || null;

/***
 * Initialized the Container View 
 */
function initView()
{
	if (args.height != null) $.vwContainer.height = args.height;
	if (args.width != null) $.vwContainer.width = args.width;
	if (args.left != null) $.vwContainer.left = args.left;
	if (args.right != null) $.vwContainer.right = args.right;
	if (args.top != null) $.vwContainer.top = args.top;
	if (args.bottom != null) $.vwContainer.bottom = args.bottom;
}

/***
 * Initialize the TextField
 */
function initTextField()
{
	if (args.color != null) $.txtField.color = args.color;
	if (args.font != null) $.txtField.font = args.font;
	$.txtField.passwordMask = args.passwordMask;
	$.txtField.value = args.value;
	if (args.borderRadius != null) $.txtField.borderRadius = args.borderRadius;
	if (args.borderWidth != null) $.txtField.borderWidth = args.borderWidth;
	if (args.backgroundColor != null) $.txtField.backgroundColor = args.backgroundColor;
	
}

/***
 * Initialize the label (as hint text) 
 */
function initLabel()
{
	if (args.hintColor != null) $.lblHint.color = args.hintColor;
	if (args.hintFont != null) $.lblHint.font = args.font;
	if (args.hintText != null) $.lblHint.text = args.hintText;
	if (args.hintLeft != null) $.lblHint.left = args.hintLeft;
	if (args.hintRight != null) $.lblHint.right = args.hintRight;
	if (args.hintTop != null) $.lblHint.top = args.hintTop;
	if (args.hintBottom != null) $.lblHint.bottom = args.hintBottom;
}

/***
 * Raised on text field value change. 
 * @param {Object} e
 */
function txtField_Change(e)
{
	$.lblHint.visible = ($.txtField.value.trim() == "");
}

// Export the TextField Value.
exports.value = $.txtField.value;

initView();
initTextField();
initLabel();
