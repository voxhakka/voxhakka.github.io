<!-- src/routes/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	export let data: PageData;

	function tabToDialectNameMapKey(tab: string) {
		return tab as keyof typeof data.dialectNameMap;
	}

	function setActiveTab(tab: string) {
		if (Object.keys(data.audioInfos).includes(tab)) {
			data.activeTab = tab as typeof data.activeTab;
		}
	}
</script>

<div class="container mx-auto px-4 py-8">
	<div class="mb-4 border p-8 shadow-xl">
		<h1 class="mb-2 text-center text-5xl">VoxHakka:</h1>
		<h3 class="mb-6 text-center text-3xl">
			A Dialectally Diverse Multi-speaker Text-to-Speech System for Taiwanese Hakka
		</h3>
		<p class="mb-4">
			<b>Abstract.</b>
			This paper introduces VoxHakka, a text-to-speech (TTS) system designed for Taiwanese Hakka, a critically
			under-resourced language spoken in Taiwan. Leveraging the YourTTS framework, VoxHakka achieves
			high naturalness and accuracy and low real-time factor in speech synthesis while supporting six
			distinct Hakka dialects. This is achieved by training the model with dialect-specific data, allowing
			for the generation of speaker-aware Hakka speech. To address the scarcity of publicly available
			Hakka speech corpora, we employed a cost-effective approach utilizing a web scraping pipeline coupled
			with automatic speech recognition (ASR)-based data cleaning techniques. This process ensured the
			acquisition of a high-quality, multi-speaker, multi-dialect dataset suitable for TTS training.
			Subjective listening tests conducted using comparative mean opinion scores (CMOS) demonstrate that
			VoxHakka significantly outperforms existing publicly available Hakka TTS systems in terms of pronunciation
			accuracy, tone correctness, and overall naturalness. This work represents a significant advancement
			in Hakka language technology and provides a valuable resource for language preservation and revitalization
			efforts.
		</p>
		<div class="flex">
			<p class="rounded-3xl bg-gray-800 text-white font-bold	px-4 py-1 mr-2">
				<a target="" href="https://arxiv.org/abs/2409.01548v1"
					><span class="icon"><i class="ai ai-arxiv"></i></span> <span>arXiv</span></a
				>
			</p>
			<p class="rounded-3xl bg-gray-800 text-white font-bold	px-4 py-1 mr-2">
				<a target="" href="https://huggingface.co/formospeech/yourtts-htia-240704"
					> <span>model</span></a
				>
			</p>
			<p class="rounded-3xl bg-gray-800 text-white font-bold	px-4 py-1">
				<a target="" href="https://huggingface.co/spaces/formospeech/taiwanese-hakka-tts"
					> <span>space</span></a
				>
			</p>
		</div>
	</div>

	<div class="flex overflow-x-auto">
		{#each Object.keys(data.audioInfos) as tab}
			<button
				class="px-4 py-2 text-sm font-medium {data.activeTab === tab
					? 'border border-b-transparent bg-white text-gray-800'
					: 'bg-gray-100 text-blue-500'}"
				on:click={() => setActiveTab(tab)}
			>
				{data.dialectNameMap[tabToDialectNameMapKey(tab)]}
			</button>
		{/each}
	</div>

	<div class="mb-4 border border-t-transparent p-8 shadow-xl">
		{#each data.audioInfos[data.activeTab] as audio_info}
			<div class="mb-8 rounded-lg border p-4">
				<p class="mb-2"><b>Text: </b> {audio_info.text}</p>
				<audio controls src="{base}{audio_info.audioUrl}" class="w-full"></audio>
				<!-- <button class="mt-2 text-blue-500">Show baseline(s)</button> -->
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	/* You can add any additional styles here if needed */
</style>
