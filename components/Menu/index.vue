<template>
  <nav :class="[$style.menu, type === 'mobile' ? $style.mobile : '']">
    <ul
      :class="[
        dir === 'col'
          ? [$style.vMenu, 'flex-c']
          : dir === 'block'
          ? [$style.blMenu, 'flex-r']
          : [$style.hMenu, 'flex-r'],
        $style.menuList,
      ]"
    >
      <li v-for="item in links" :key="item.id">
        <NuxtLink
          target="_blank"
          :class="[
            'flex-r',
            icons === 'true' ? 'icon-link' : 'link',
            $style.link,
          ]"
          :to="localePath(item.url)"
        >
          <div
            v-if="icons === 'true'"
            :class="
              item.bg === 'true' ? $style.iconBlock : $style.iconWithoutBlock
            "
          >
            <Icon
              :icon="item.id"
              :fill="item.color"
              width="20px"
              height="20px"
            />
          </div>

          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import { useLocalePath } from '#i18n';
  import Icon from '../Icon/index.vue';

  const props = defineProps({
    type: {
      type: String,
      default: '',
    },
    links: {
      type: Array as PropType<
        Array<{
          id: string;
          title: string;
          color?: string;
          url: string;
          bg?: string;
        }>
      >,
      default: () => [],
    },
    dir: {
      type: String as PropType<'row' | 'col' | 'block'>,
      default: 'row',
    },
    icons: {
      type: String as PropType<'true' | false>,
      default: 'false',
    },
  });

  const { type, links, dir, icons } = props;
  const localePath = useLocalePath();
</script>

<style module type="scss" src="./Menu.module.scss"></style>
