import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InnerBlocks
} from "@wordpress/block-editor";

const TEMPLATE = [['core/columns', { backgroundColor: 'yellow', verticalAlignment: 'center' }, [
  ['core/column', { templateLock: 'all' }, [
    ['core/image'],
  ]],
  ['core/column', { templateLock: 'all' }, [
    ['voltron-block/voltron-starter-block', { placeholder: 'Enter side content...' }],
  ]],
]]];

registerBlockType('voltron-block/voltron-starter-container-block', {
  title: __('Voltron container block', 'voltron-starter-block'),
  category: 'design',

  edit({ className }) {

    return (
      <div className={className}>
        <InnerBlocks
          template={TEMPLATE}
          templateLock="all"
        />
      </div>
    )
  },

  save() {
    const blockProps = useBlockProps.save();
    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    )
  },
});